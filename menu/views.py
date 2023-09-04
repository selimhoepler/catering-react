from django.shortcuts import render
from menu.models import CateringBooking
import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.utils import ImageReader
from .forms import BookingForm
from django.http import HttpResponse, FileResponse, HttpResponseForbidden
from django.template.loader import get_template
from django.views import View
from reportlab.pdfgen import canvas
from io import BytesIO
from datetime import datetime
from reportlab.lib.colors import *
from rest_framework import viewsets
from .serializer import CateringSerializer
from .models import CateringBooking

from django.http import JsonResponse
from django.middleware.csrf import get_token

# Create your views here.

class menuView(viewsets.ModelViewSet):
    serializer_class = CateringSerializer
    queryset = CateringBooking.objects.all()


def custom_csrf_failure(request, reason=""):
    # Hier kannst du benutzerdefinierte Logik hinzufügen, um den Fehler zu behandeln
    return HttpResponseForbidden("CSRF Token Validation Failed: " + reason)


def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})

def ping(request):
    return JsonResponse({'result': 'OK'})


def book_catering(request):
    if request.method == 'POST':
        form = BookingForm(request.POST)
        if form.is_valid():
            # Save the booking to the database
            form.save()
            # Redirect to a success page or display a success message
            return render(request, 'menu/booking_success.html')
    else:
        form = BookingForm()

    return render(request, 'menu/book_catering.html', {'form': form})


def success_view(request):
    return render(request, 'menu/success.html')

class GeneratePDFView(View):
    def post(self, request, *args, **kwargs):
        # Fetch form data
        vorname = request.POST.get('vorname')
        nachname = request.POST.get('nachname')
        email = request.POST.get('email')
        telefon = request.POST.get('telefon')
        # date = request.POST.get('date')
        date = datetime.strptime(request.POST.get('date'), '%Y-%m-%d').strftime('%d-%m-%Y')
        start_time = request.POST.get('start_time')
        end_time = request.POST.get('end_time')
        last_bill_value = request.POST.get('lastBill')
        meal_choices = request.POST.getlist('meal')
        meal_time_choices = request.POST.getlist('mealtime')

        notice_content = request.POST.get('notice_content')
        drink_choices = request.POST.getlist('drinks')
        stehlpulte_count = int(request.POST.get('stehlpulteCount', 0))
        catering_group_count = int(request.POST.get('cateringGroup', 0))
        service_needed = request.POST.get('service')  # Get the service checkbox value

        # Generate the PDF
        buffer = BytesIO()
        p = canvas.Canvas(buffer, pagesize=letter)

        # Load and draw a background image
        # image_path = '/Users/aliasaad/Desktop/catering_design_1.png'
        # background_image = ImageReader(image_path)
        # p.drawImage(background_image, 0, 0, width=letter[0], height=letter[1])

        p.setFillColor(orangered)
        p.setFont('Helvetica-Bold', 15)
        title_x = (letter[0] - p.stringWidth('Unverbindliche Catering Anfrage')) / 2
        title_y = letter[1] - 100
        p.drawString(title_x, title_y, 'Unverbindliche Catering Anfrage')

        p.setFillColor(black)

        # Write content to the PDF
        content_x = 120
        content_y = letter[1] - 220

        p.setFont('Helvetica-Bold', 12)
        p.drawString(content_x, content_y, 'Vorname: {}'.format(vorname))
        p.drawString(content_x, content_y - 25, 'Nachname: {}'.format(nachname))
        p.drawString(content_x, content_y - 50, 'Email: {}'.format(email))
        p.drawString(content_x, content_y - 75, 'Telefon: {}'.format(telefon))
        p.drawString(content_x, content_y - 100, 'Datum: {}'.format(date))
        p.drawString(content_x, content_y - 125, 'Startzeit: {}'.format(start_time))
        p.drawString(content_x, content_y - 150, 'Endzeit: {}'.format(end_time))
        p.drawString(content_x, content_y - 175, 'Gesamtbetrag für Speisen + Ausstattung: € {} Netto'.format(last_bill_value))

        # Draw the service needed information
        # service_x = content_x
        # service_y = content_y - 200
        # p.setFont('Helvetica-Bold', 12)
        # p.drawString(service_x, service_y, 'Service benötigt: {}'.format(service_needed))


        if service_needed is not None:
            # Checkbox is selected
            service_x = content_x
            service_y = content_y - 200
            p.setFont('Helvetica-Bold', 12)
            p.drawString(service_x, service_y, 'Service benötigt: {}'.format(service_needed))
        else:
            # Checkbox is not selected
            service_x = content_x
            service_y = content_y - 200
            p.setFont('Helvetica-Bold', 12)
            p.drawString(service_x, service_y, 'Service benötigt: Keine Auswahl')


        meal_time_choices_str = ', '.join(meal_time_choices)
        p.drawString(service_x, service_y - 175, 'Ausgewählte Mahlzeiten: {}'.format(meal_time_choices_str))


        # Draw the notice content
        p.setFont('Helvetica', 14)
        notice_x = content_x
        notice_y = content_y - 220
        p.drawString(notice_x, notice_y, '')
        p.drawString(notice_x, notice_y - 20, 'Anmerkungen: {}'.format(notice_content))


        p.showPage()  # Add this line to end the first page


        # image_path = '/Users/aliasaad/Desktop/catering_design_2.png'
        # background_image = ImageReader(image_path)

        # p.drawImage(background_image, 0, 0, width=letter[0], height=letter[1])

        
        # Draw the meal choices
        p.setFont('Helvetica-Bold', 12)
        p.drawString(content_x, content_y + 50, 'Auswahl Menü:')
        meal_x = content_x + 0
        meal_y = content_y - 50

        p.setFont('Helvetica-Bold', 8)

        # Divide meal choices into three sections based on their IDs (div1, div2, div3)
        div1_choices = []
        div2_choices = []
        div3_choices = []

        for choice in meal_choices:
            if choice.startswith('div1'):
                div1_choices.append(choice)
            elif choice.startswith('div2'):
                div2_choices.append(choice)
            elif choice.startswith('div3'):
                div3_choices.append(choice)
        
        # Draw the choices for each section

        # Section 1: Vorspeisen
        new_meal_y = meal_y +50  # Start at the current meal_y position
        p.setFont('Helvetica-Bold', 10)
        p.drawString(meal_x, new_meal_y, 'Vorspeisen:')
        # p.line(meal_x, new_meal_y - 10, meal_x + 100, new_meal_y - 10)
        p.setFont('Helvetica-Bold', 8)
        p.setFillColor(orangered)
        for index, choice in enumerate(div1_choices):
            p.drawString(meal_x, new_meal_y - ((index + 1) * 18), '- {}'.format(choice.split(':', 1)[-1]))

        p.setFillColor(black)

        # Section 2: Hauptspeisen
        new_meal_y -= 90  # Move the section 90 units lower from the previous section
        p.setFont('Helvetica-Bold', 10)
        p.drawString(meal_x, new_meal_y, 'Hauptspeisen:')
        # p.line(meal_x, new_meal_y - 10, meal_x + 250, new_meal_y - 10)
        p.setFont('Helvetica-Bold', 8)
        p.setFillColor(orangered)
        for index, choice in enumerate(div2_choices):
            p.drawString(meal_x, new_meal_y - ((index + 1) * 18), '- {}'.format(choice.split(':', 1)[-1]))

        p.setFillColor(black)

        # Section 3: Dessert
        new_meal_y -= 90  # Move the section 90 units lower from the previous section
        p.setFont('Helvetica-Bold', 10)
        p.drawString(meal_x, new_meal_y, 'Dessert:')
        # p.line(meal_x, new_meal_y - 10, meal_x + 350, new_meal_y - 10)
        p.setFont('Helvetica-Bold', 8)
        p.setFillColor(orangered)
        for index, choice in enumerate(div3_choices):
            p.drawString(meal_x, new_meal_y - ((index + 1) * 18), '- {}'.format(choice.split(':', 1)[-1]))



        p.setFillColor(black)
        # Draw the drink choices
        # drink_x = content_x + 300
        # drink_y = meal_y + -280
        # p.setFont('Helvetica-Bold', 10)
        # p.drawString(drink_x, drink_y, 'Auswahl Getränke:')
        # p.setFont('Helvetica-Bold', 8)
        # p.setFillColor(orangered)
        # for index, choice in enumerate(drink_choices):
        #     p.drawString(drink_x, drink_y - ((index + 1) * 20), '- {}'.format(choice))


        drink_x = content_x + 300
        drink_y = meal_y + -280
        p.setFont('Helvetica-Bold', 10)
        p.drawString(drink_x, drink_y, 'Auswahl Getränke:')
        p.setFont('Helvetica-Bold', 8)
        p.setFillColor(orangered)

        if not drink_choices:
            p.drawString(drink_x, drink_y - 20, 'Keine Auswahl')
        else:
            for index, choice in enumerate(drink_choices):
                p.drawString(drink_x, drink_y - ((index + 1) * 20), '- {}'.format(choice))
    

        # Draw the stehlpulte and catering group count
        p.setFillColor(black)
        p.setFont('Helvetica-Bold', 10)
        p.drawString(content_x, content_y - 330, 'Anzahl Stehlpulte: {}'.format(stehlpulte_count))
        p.drawString(content_x, content_y - 350, 'Anzahl Catering Gruppen: {}'.format(catering_group_count))


        p.showPage()


        p.save()

        buffer.seek(0)

        # Send the PDF as a response
        response = HttpResponse(buffer, content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="catering_anfrage.pdf"'

        return response