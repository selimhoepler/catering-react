import React, { useState, useEffect, useRef } from 'react';
import CateringArt from './form_components/CateringArt';
import { MealtimeRadioGroup, CateringGroupInput, Auststattung, BasicExampple } from './form_components/minor_components';
import Contact from './form_components/contact/Contact';
import Button from 'react-bootstrap/Button';

const Form = () => {
  // State für die Formular-Daten
  const [formData, setFormData] = useState({
    bookingID: '',
    date: '',
    start_time: '08:00',
    end_time: '10:30',
    groupSize: 5,
    cateringArt: 'fingerfood',
    service: false,
    drinks: 'nein', // nötig?
    drinks: [],
    Geschirr: false,
    meal: [],
    Stehpulte: false,
    stehpulteCount: 0,

  });



  const handleSubmit = (e) => {
    alert(JSON.stringify(formData));
    return
  }

  // State für den Preis, Preis de Formular auf Submit übergeben (!)
  const [price, setPrice] = useState(0);



  // Funktion zum Aktualisieren der Formular-Daten
  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;
    const category = e.target.getAttribute('category'); // Holen Sie sich das category-Attribut, wenn es existiert
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
          [name]: checked,
        });
      }
      console.log(value, formData);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
      console.log(name, value)
      console.log(value, formData);
    }
  };




  const handleClearMeal = () => {
    setFormData({
      ...formData,
      meal: [],
      drinks: [],
    });
  };

  // Funktion zum Berechnen des Preises basierend auf den ausgewählten Optionen
  const calculatePrice = (indicator) => {

    var groupSize = formData.groupSize;

    var pricePerPerson;
    var geschirrTischKosten = 0;
    var hussenKosten = 0;
    var transportKosten;

    var price = 0;





    pricePerPerson = updateGruppenKosten();
    transportKosten = updateTransportKosten();
    geschirrTischKosten = updateGeschirrTischKosten();
    hussenKosten = updateHussenKosten();


    price = (pricePerPerson * groupSize) + geschirrTischKosten + hussenKosten + transportKosten;
    // console.log("price= ", pricePerPerson, "*", groupSize, "+", geschirrTischKosten, "+", hussenKosten, "+", transportKosten);

    return price;

  };

  // Effekt zum Aktualisieren des Preises, wenn sich die Formulardaten ändern
  useEffect(() => {
    var tempPrice = calculatePrice("useEffect");
    setPrice(tempPrice);
    // setFormData({
    //   ...formData,
    //   preis: price,
    // });
  }, [formData]);


  function updateTransportKosten() {
    var groupSize = formData.groupSize;
    var transportKosten = 0;

    if (groupSize <= 20) {
      transportKosten = 40;
    } else {
      transportKosten = 60;
    }

    return transportKosten;
  }

  function updateGruppenKosten() {
    var groupSize = formData.groupSize;
    var pricePerPerson = 0;

    if (groupSize >= 0 && groupSize <= 20) {
      pricePerPerson = 11;
    } else if (groupSize >= 21 && groupSize <= 40) {
      pricePerPerson = 10;

    } else if (groupSize >= 41 && groupSize <= 60) {
      pricePerPerson = 9;

    } else if (groupSize >= 61 && groupSize <= 80) {
      pricePerPerson = 8;

    } else {
      pricePerPerson = 0;
    }
    return pricePerPerson;

  }

  function updateGeschirrTischKosten() {

    var groupSize = formData.groupSize;
    var geschirrTischKosten = 0;

    if (formData.Geschirr) {

      if (groupSize >= 1 && groupSize <= 20) {
        geschirrTischKosten = 45 + 10;  // UPDATE SELIM: added transportCosts 
      } else if (groupSize >= 21 && groupSize <= 40) {
        geschirrTischKosten = 65 + 20;  // UPDATE SELIM: added transportCosts
      } else if (groupSize >= 41 && groupSize <= 60) {
        geschirrTischKosten = 85;
      } else if (groupSize >= 61 && groupSize <= 80) {
        geschirrTischKosten = 110;
      }
    }
    return geschirrTischKosten;
  }

  function updateHussenKosten() {
    var stehpulteCount = formData.stehpulteCount;
    var Stehpulte = formData.Stehpulte;
    var hussenKosten = 0;

    if (Stehpulte) {
      hussenKosten = stehpulteCount * 5;
    }
    return hussenKosten;

  }


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

  const toggleOverlay = () => {
    const overlay = document.querySelector('.my-overlay');
    overlay.classList.toggle('active');

  };




  // return HTML (jsx) ------------------------------
  return (
    <form onSubmit={handleSubmit}>
      <div className='sub-container'>
        <div className='date-and-time' >
          <label htmlFor="date" style={{ marginBottom: '0px', marginTop: '10px' }}>
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


          <label htmlFor="start_time" style={{ marginBottom: '0px', marginTop: '10px' }}>
            Beginn:
          </label>
          <input type="time" id="start_time" name="start_time" min="09:00" max="18:00" value={formData.start_time} onChange={(e) => {
            const newValue = e.target.value; // Capture the event value

            handleChange(e); // Call the first function with the event

          }} required />
          <label htmlFor="end_time" style={{ marginBottom: '0px', marginTop: '10px' }}>
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

        <div className='card info-card shadowy' style={{ marginTop: '20px', overflow: 'hidden' }}>
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
      <CateringArt handleChange={handleChange} formData={formData} clearMeal={handleClearMeal} />
      {/* Continue with the rest of the form elements */}
      <div className='sub-container' style={{ width: '417px' }}>
        <Auststattung handleChange={handleChange} formData={formData} />




        <div className='card shadowy' style={{ marginTop: '20px', overflow: 'hidden' }}>
          <div className='card-header'> PREIS </div>
          <div className='card-body'>
            <small>Der aktuelle Preis beträgt:</small>
            <br />
            <strong>{price} Euro</strong>


          </div>
        </div>

        <Button onClick={toggleOverlay}>
          Weiter
        </Button>
      </div>
      <div className="my-overlay" >
        <div className='overlay-content-container'>
        <div className='contact-container'>
        <Contact />
        
        <button type="submit">Submit</button>
        </div>
        <div className='close-btn-container'>
         <input type="image" className='close-img' src="https://img.icons8.com/?size=512&id=71200&format=png" alt="close" onClick={toggleOverlay} />
        </div>
        </div>
      </div>
    </form>
  );
};



export default Form;
