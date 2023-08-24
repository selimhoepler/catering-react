import React, { useState, useEffect, useRef } from 'react';
import TimePicker from 'react-time-picker'
import CateringArt from './form_components/CateringArt';

const Form = () => {
  // State für die Formular-Daten
  const [formData, setFormData] = useState({
    bookingID: '',
    date: '',
    start_time: '08:00',
    end_time: '',
    mealtime: '',
    groupSize: 5,
    cateringArt: 'fingerfood',
    service: '',
    drinks: 'nein',
    drinksMenu: [],
    personen: '',
    stehpulteCount: 0,
    notice_content: '',

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
    }
  };
  

  // Funktion zum Berechnen des Preises basierend auf den ausgewählten Optionen
  const calculatePrice = () => {
    // Hier können Sie Ihre Preisberechnung durchführen, basierend auf formData
    // Beispiel: Angenommen, der Grundpreis beträgt 10 Euro pro Person
    // und es gibt 3 ausgewählte Gerichte im Menü (pro Person 3 Euro)
    // und für Service vor Ort gibt es einen Aufpreis von 50 Euro.
    // Der Preis könnte wie folgt berechnet werden:

    // const basicPricePerPerson = 10;
    // const selectedMealsPrice = formData.meal.length * 3; // Annahme, dass jedes Gericht 3 Euro kostet
    // const servicePrice = formData.service === 'ja' ? 50 : 0;
    // const groupSize = parseInt(formData.groupSize);
    // const totalPrice = basicPricePerPerson * groupSize + selectedMealsPrice + servicePrice;

    // setPrice(totalPrice);
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

  // Hier können Sie den Rest der Formular-Komponente erstellen
  // und die entsprechenden Eingabefelder für das Formular hinzufügen.
  // Nutzen Sie die State-Variablen formData, groupSizeVisible und drinksVisible,
  // um die Anzeige der Eingabefelder zu steuern.

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




  // ------------------------COMPONENTS---------------------------

  const MealtimeRadioGroup = () => {
    return (
      <div className="card text-white bg-primary mb-4" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Uhrzeit</div>
        <div className="card-body">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="mealtime"
              id="frühstückradio"
              value="Frühstück"
              checked={formData.mealtime === 'Frühstück'}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="frühstückradio">
              Frühstück
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="mealtime"
              id="mittagRadio"
              value="Mittag"
              checked={formData.mealtime === 'Mittag'}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="mittagRadio">
              Mittagessen
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="mealtime"
              id="abendradio"
              value="Abendessen"
              checked={formData.mealtime === 'Abendessen'}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="abendradio">
              Abendessen
            </label>
          </div>
        </div>
      </div>
    );
  };



  const CateringGroupInput = () => {
    return (
      <div id="cateringGroupContainer">
        <label htmlFor="cateringGroup" style={{ textAlign: 'center' }}>
          Catering Gruppe
        </label>
        <input
          type="number"
          id="cateringGroup"
          name="cateringGroup"
          min="5"
          max="100"
          value={formData.groupSize}
          onChange={handleChange}
        />
      </div>
    );
  };











  // return HTML (jsx) ------------------------------
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date" style={{ textAlign: 'center' }}>
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
      </div>
      <br />
      <MealtimeRadioGroup />
      <CateringGroupInput />

      <div className='infoContainer'>
        <div className='infoSubContainer'>
          <strong>Für eine Gruppengröße von 5-20 Personen</strong>
          <small>Können 2 Gerichte ausgewählt werden</small>
        </div>
        <div className='infoSubContainer'>
          <strong>Für eine Gruppengröße von 5-20 Personen</strong>
          <small>Können 2 Gerichte ausgewählt werden</small>
        </div>
      </div>
      <CateringArt handleChange={handleChange} />
      {/* Continue with the rest of the form elements */}
      {/* <div>
        <TimePicker 
        value={formData.start_time}
        onChange={(value) => handleChange({ target: { name: 'start_time', value } })}  />
      </div> */}

      <button type="submit">Submit</button>
    </form>
  );
};



export default Form;
