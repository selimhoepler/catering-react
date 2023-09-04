from django.urls import path
# from menu.views import book_catering
from menu.views import *
from .views import GeneratePDFView, csrf

app_name = 'menu'

urlpatterns = [
    path('', book_catering, name='book_catering'),
    path('generate-pdf/', GeneratePDFView.as_view(), name='generate_pdf'),
    path('success/', success_view, name='success'),
    path('csrf/', csrf)
]
