from django import forms

class BookingForm(forms.Form):
    date = forms.DateField(
        widget=forms.DateInput(attrs={'type': 'date', 'style': 'text-align: center;'})
    )
    start_time = forms.TimeField(widget=forms.TimeInput(attrs={'type': 'time'}))
    end_time = forms.TimeField(widget=forms.TimeInput(attrs={'type': 'time'}))
    
    
    # date = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}))
    # customer_name = forms.CharField(max_length=100)
    # Add other fields as needed



