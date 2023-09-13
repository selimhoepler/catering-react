import React, { useState, useEffect, useRef } from 'react';
import CateringArt from './form_components/CateringArt';
import { MealtimeRadioGroup, CateringGroupInput, Auststattung, BasicExampple } from './form_components/minor_components';
import Contact from './form_components/contact/Contact';
import Button from 'react-bootstrap/Button';
import MealTime from './form_components/Mealtime';
import Fruehstueck from './form_components/Fruestueck';
import { generatePDF } from './MyPdf'; 



/* Form is the big container component of this app, containing various smaller and sub components, the HTML-Form and formData, which gets submitted to the backend  
  if there is console.log its for debug



  DATA will be sent like:
  data = {
    formData {
      bookinID: '123983',
      date: '2023-11-21',
      ...
    }
  	contactData {
      name: 'ali assad',
      email: 'assad@gmaul.com,
      ...
    }
  }


  So the backend just has to data.contactData.name for the name e.g
*/






const Form = () => {
  // State for formular data
  // this object will be submitted to the backend as JSON
  const [formData, setFormData] = useState({
    bookingID: '',
    date: '2023-09-15',
    start_time: '09:00',
    end_time: '11:00',
    groupSize: 5,
    cateringArt: 'fingerfood',
    service: false,
    drinks: 'nein', // nötig?
    drinks: [],
    Geschirr: false,
    meal: ['test'],
    Stehpulte: false,
    stehpulteCount: 0,
    mealtime: 'Frühstück',

  });


  



// after user put all the information, the data from the catering-order aswell as the Contact Data of the user will be submitted to the backend
// FOR NOW: ONLY GENERATING PDF; NOT SENDING ANYTHING TO BACKEND
  const submitDataToBackend = async (formData, contactData) => {
    try {

      setFormData({
        ...formData,
        preis: price,
      });


        generatePDF(formData);
      

      


      console.log(formData, contactData);
      const data = { formData, contactData };
    } catch (error) {
      console.log(error);
    }
  };

  const addPriceToFormData = () => {
    setFormData({
      ...formData,
      preis: price,
    });

  };



  const [mealTime, setMealtime] = useState('fruehstueck');


  // State for Price
  const [price, setPrice] = useState(0);



  // Function to handle Change of FormData
  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;
    const category = e.target.getAttribute('category'); // Holen Sie sich das category-Attribut, wenn es existiert
    console.log(category);
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
      };
      console.log(value, formData);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
      console.log(name, value)
      console.log(value, formData);
    };
  };



  // clear meal and drinks from formData when either mealtime changes or switching between fingerfood and buffet.
  // It is because the checkboxes get unchecked when switching
  const handleClearMeal = () => {
    setFormData({
      ...formData,
      meal: [],
      drinks: [],
    });
  };

  // Function to calculate price based on user choices and input
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

  // Change price when formData changes
  useEffect(() => {
    var tempPrice = calculatePrice("useEffect");
    setPrice(tempPrice);
    // setFormData({
    //   ...formData,
    //   preis: price,
    // });
  }, [formData]);


  // Next functions are own logic for calculating the price

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






// function to alert user when date selected has already passed
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


  //function to toggle the overlay where user can input personal and contact Data.
  // calls validateFields() and switches between showing errors or letting user input contactData
  const toggleOverlay = () => {

    const errors = validateFields();
    console.log(errors);
    if (Object.keys(errors).length === 0) {

      const overlay = document.getElementById('contactOverlay');
      overlay.classList.toggle('active');
      addPriceToFormData();


    }
    else {
      const errorList = document.createElement('ul');
      errorList.classList.add('error-list');

      for (const key in errors) {
        const errorItem = document.createElement('li');
        errorItem.textContent = errors[key];
        errorList.appendChild(errorItem);
      }

      const contactContainer = document.getElementById('errorContainer');
      contactContainer.textContent = '';
      contactContainer.appendChild(errorList);

      const overlay = document.getElementById('errorsOverlay');
      overlay.classList.toggle('active');
    }

  };



  // func that automatically puts the end_time 2 hours later then the start_time when changing start_time
  const handleTime = (e) => {
    //set end_time always 2 hours after start_time 
    var start_time = e.value;
    var end_time = new Date(`2022-01-01T${start_time}:00`);
    end_time.setHours(end_time.getHours() + 2);
    var end_time_string = end_time.toTimeString().slice(0, 5);
    setFormData((prevFormData) => ({
      ...prevFormData,
      end_time: end_time_string,
    }));
  }; 


// custom field validation for before user gets to input cotact Data
// checks if a date is selected, if time is valid (currently between 9AM and 10PM, potential change), and if anything is selected in the menu
// returns a list of errors
  const validateFields = () => {
    var date = formData.date;
    var start_time = formData.start_time;
    var meal = formData.meal;
    var errors = [];

    var isValid = true;

    if (date === '') {
      isValid = false;
      errors.date = "Bitte wählen Sie ein Datum.";

    }

    if (meal.length === 0) {
      isValid = false;
      errors.meal = "Sie haben nichts zu essen gewählt.";


    }

    const startTime = new Date(`2022-01-01T${start_time}:00`);
    const startRange = new Date(`2022-01-01T09:00:00`);
    const endRange = new Date(`2022-01-01T22:00:00`);

    if (startTime < startRange || startTime > endRange) {
      errors.start_time = 'Bitte wählen Sie eine Zeit zwischen 9:00 und 22:00 aus.';


    }


    return errors

  }





  // return HTML (jsx) ------------------------------
  return (
    <form>

      {/* sub container containing date and time input, catering gorpu size component and info box for how manyy meals can be selected, Also contains the switch between mealtimes which is being stored in const mealTime */}
      <div className='sub-container' id='first-sub'>
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
            handleTime({ value: newValue});

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
        <MealTime handleChange={handleChange} formData={formData} clearMeal={handleClearMeal} setMealtime={setMealtime}/>

        <div className='card info-card shadowy' style={{ marginTop: '20px', overflow: 'hidden' }}>
          <div className='card-header'> INFO </div>
          <div className='card-body' id='zwei-gerichte'>
            <strong>Für eine Gruppengröße von 5-20 Personen</strong>
            <br />
            <small>Können 2 Gerichte pro Kategorie ausgewählt werden</small>
          </div>
          <div className='card-body' id='drei-gerichte'>
            <strong>Für eine Gruppengröße von 21+ Personen</strong>
            <br />
            <small>Können 3 Gerichte pro Kategorie ausgewählt werden</small>
          </div>
        </div>
      </div>





      {/* const mealtime conditional renddering either renders the #mittag' or the 'frühstück' food choices sub container*/}
      {mealTime === 'fruehstueck' && (
      <Fruehstueck handleChange={handleChange} formData={ formData} />
      )}
      {mealTime === 'mittag' && (
      <CateringArt handleChange={handleChange} formData={formData} clearMeal={handleClearMeal} />
      )}





      {/* sub Container containing some Catering info for formData and the button which sends you to the overlay on toggleOverlay()*/}
      <div className='sub-container' id="second-sub" style={{ width: '417px' }}>
        <Auststattung handleChange={handleChange} formData={formData} />




        <div className='card shadowy' style={{ marginTop: '20px', overflow: 'hidden' }}>
          <div className='card-header'> PREIS </div>
          <div className='card-body'>
            <small>Der aktuelle Preis beträgt:</small>
            <br />
            <strong>{price} Euro</strong>


          </div>
        </div>

        
        <button className="submit-btn" onClick={toggleOverlay} style={{marginTop: '30px'}}>Weiter</button>

      </div>
      <div className="my-overlay" id='errorsOverlay' >
        <div className='overlay-content-container'>
          <div className='contact-container' id='errorContainer'>
            ERRORRRRRR
          </div>
          <div className='close-btn-container'>
            <input type="image" className='close-img' src="https://img.icons8.com/?size=512&id=71200&format=png" alt="close" onClick={toggleOverlay} />
          </div>
        </div>
      </div>
      <div className="my-overlay" id='contactOverlay' >
        <div className='overlay-content-container'>
          <div className='contact-container'>
            <Contact onSubmit={submitDataToBackend} addPrice={addPriceToFormData} formData={formData} />


          </div>
          <div className='close-btn-container'>
            <input type="image" className='close-img' src="https://img.icons8.com/?size=512&id=71200&format=png" alt="close" onClick={toggleOverlay} />
          </div>
        </div>
      </div>
      <canvas id="backgroundCanvas" width="210" height="297" style={{display: 'none'}}></canvas>
    </form>
  );
};



export default Form;
