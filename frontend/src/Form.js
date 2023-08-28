import React, { useState, useEffect, useRef } from 'react';
import CateringArt from './form_components/CateringArt';
import { MealtimeRadioGroup, CateringGroupInput, Auststattung } from './form_components/minor_components';

const Form = () => {
  // State für die Formular-Daten
  const [formData, setFormData] = useState({
    bookingID: '',
    date: '',
    start_time: '08:00',
    end_time: '10:30',
    mealtime: 'Frühstück',
    groupSize: 5,
    cateringArt: 'fingerfood',
    service: 'nein',
    drinks: 'nein', // nötig?
    drinksMenu: [],
    geschirr: 'nein',
    meal: [],

    stehpulteCount: 0,

  });

  const handleSubmit = (e) => {
    alert(JSON.stringify(formData));
    return
  }

  // State für den Preis
  const [price, setPrice] = useState(0);

  // State für die Anzeige der Gerichte basierend auf der Gruppengröße
  const [groupSizeVisible, setGroupSizeVisible] = useState(false);

  // State für die Anzeige der Getränkeauswahl basierend auf der Auswahl "Ja" oder "Nein"
  const [drinksVisible, setDrinksVisible] = useState(false);

  // Funktion zum Aktualisieren der Formular-Daten
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      // Überprüfe, ob formData[name] ein Array ist
      if (Array.isArray(formData[name])) {
        // Wenn es ein Array ist, aktualisiere die ausgewählten Werte
        const updatedValue = checked
          ? [...formData[name], value]
          : formData[name].filter((item) => item !== value);
        setFormData({
          ...formData,
          [name]: updatedValue,
        });
      } else {
        // Wenn es kein Array ist, setze den Wert als einzelnes Element-Array
        setFormData({
          ...formData,
          [name]: checked ? [value] : [],
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,

      });
      console.log(value, formData);
    }
  };


  // Funktion zum Berechnen des Preises basierend auf den ausgewählten Optionen
  const calculatePrice = () => {

  };

  // Effekt zum Aktualisieren des Preises, wenn sich die Formulardaten ändern
  useEffect(() => {
    calculatePrice();
  }, [formData]);

  // Funktion zum Anzeigen oder Ausblenden der Gruppengröße basierend auf der Catering-Gruppe
  const handleCateringGroupChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    setGroupSizeVisible(selectedValue >= 5 && selectedValue <= 20);
    handleChange(e);
  };

  // Funktion zum Anzeigen oder Ausblenden der Getränkeauswahl basierend auf der Getränkeauswahl
  const handleDrinksChange = (e) => {
    const selectedValue = e.target.value;
    setDrinksVisible(selectedValue === 'ja');
    handleChange(e);
  };


  const setTimeout = (e) => {
    var dateParts = e.value.split('-');
    var year = parseInt(dateParts[0]);
    var month = parseInt(dateParts[1]) - 1; // Month is zero-based in JavaScript
    var day = parseInt(dateParts[2]);

    // Check if the entered date is valid
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      return;
    }

    var selectedDate = new Date(year, month, day);
    var currentDate = new Date();

    if (selectedDate < currentDate) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        date: '',
      }));
      alert("Bitte wählen Sie ein zukünftiges Datum.");

    }
  };




  // return HTML (jsx) ------------------------------
  return (
    <form onSubmit={handleSubmit}>
      <div className='sub-container'>
        <div className='date-and-time' >
          <label htmlFor="date" style={{background:'#4e3022', textAlign: 'center' }}>
            Datum:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={(e) => {
              const newValue = e.target.value; // Capture the event value

              handleChange(e); // Call the first function with the event
              setTimeout({ value: newValue });
            }
            }
            required
          />


          <label htmlFor="start_time" style={{backgroundColor:'#4e3022', textAlign: 'center' }}>
            Beginn:
          </label>
          <input type="time" id="start_time" name="start_time" min="09:00" max="18:00" value={formData.start_time} onChange={(e) => {
            const newValue = e.target.value; // Capture the event value

            handleChange(e); // Call the first function with the event

          }} required />
          <label htmlFor="end_time" style={{backgroundColor:'#4e3022', textAlign: 'center' }}>
            Ende:
          </label>
          <input type="time" id="end_time" name="end_time" min="09:00" max="18:00" value={formData.end_time} onChange={(e) => {
            const newValue = e.target.value; // Capture the event value

            handleChange(e); // Call the first function with the event

          }} required />
        </div>
        <br />
        {/* <MealtimeRadioGroup handleChange={handleChange} formData={formData} /> */}
        <CateringGroupInput handleChange={handleChange} formData={formData} />

        <div className='card info-card' style={{marginTop: '20px', overflow: 'hidden'}}>
          <div className='card-header'> INFO </div>
          <div className='card-body'>
            <strong>Für eine Gruppengröße von 5-20 Personen</strong>
            <br />
            <small>Können 2 Gerichte pro Kategorie ausgewählt werden</small>
          </div>
          <div className='card-body'>
            <strong>Für eine Gruppengröße von 21+ Personen</strong>
            <br />
            <small>Können 3 Gerichte pro Kategorie ausgewählt werden</small>
          </div>
        </div>
      </div>
      <CateringArt handleChange={handleChange} formData={formData} />
      {/* Continue with the rest of the form elements */}
      <div className='sub-container' style={{width: '417px'}}>
      <Auststattung handleChange={handleChange} formData={formData} />


      <button type="submit">Submit</button>
      </div>
    </form>
  );
};



export default Form;
