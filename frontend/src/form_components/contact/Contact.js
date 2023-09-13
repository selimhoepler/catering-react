import React, { useState, useEffect } from 'react';
import { TextInput, TextArea, Contact_button, TelephoneInput } from './Contact-components';

/* Container width contact input

    contactData saves fields for name, telephone, etc... is being submitted to backend with formData from Form.js

*/

const Contact = ({ onSubmit, addPrice, formData }) => {


    const [contactData, setContactData] = useState({
        name: {
            name: 'name',
            label: 'Name',
            value: '',
            focus: false,
        },
        email: {
            name: 'email',
            label: 'Email',
            value: '',
            focus: false,
        },
        message: {
            name: 'message',
            label: 'Anmerkungen',
            value: '',
            focus: false,
        },
        telephone: {
            name: 'telephone',
            label: 'Telefon',
            value: '',
            focus: false,
        },
        anrede: {
            name: 'anrede',
            label: 'Anrede',
            value: 'Herr',
        }
    });





    const validateFields = (e) => {
        var name = contactData.name.value;
        var email = contactData.email.value;
        
        var telephone = contactData.telephone.value;

        var errors = [];
    
        var isValid = true;
    
        if (name === '') {
          
          errors.push('name-input');
        }
    
        if (email === '') { 
          
            errors.push('email-input');


        }
        
        if (telephone === '') {
            isValid = false;
            
            errors.push('telephone-input');
        }
    
        if (errors.length > 0) {
        //iterate through errors array and add class to each element
        errors.forEach((element) => {
            document.getElementById(element).classList.add('error');
            });
        }
        else {
            handleSubmit(e);
        }
    
      }


      
    // func so idt ndoesnt return the whole of contactData but just the important values for the order
    const getValues = (contactData) => {

        // for every key in contactData, get the value of ['value'] and return it like key: value;
        const values = Object.keys(contactData).map(key => {
            console.log(key);
            return { [key]: contactData[key]['value'] }
        })
        return values;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const clearContactData = getValues(contactData);
        console.log(clearContactData);
        

        // Überprüfe, ob die Checkbox ausgewählt ist
        const privacyCheckbox = document.getElementById('privacy-checkbox');
        if (!privacyCheckbox.checked) {
            alert('Bitte akzeptieren Sie die Datenschutzbestimmungen.');
            return;
        }
        // Rufe die onSubmit-Funktion aus den Props auf und übergebe sowohl formData als auch contactData
        onSubmit(formData, clearContactData);
    };



    //Some style loogic and logic to add to contactData

    const handleFocus = (e) => {
        const fieldName = e.target.name;
        const updatedContactData = {
            ...contactData,
            [fieldName]: {
                ...contactData[fieldName],
                focus: true,
            },
        };
        setContactData(updatedContactData);
    };

    const handleBlur = (e) => {
        const fieldName = e.target.name;
        const updatedContactData = {
            ...contactData,
            [fieldName]: {
                ...contactData[fieldName],
                focus: false,
            },
        };
        setContactData(updatedContactData);
    };

    const handleDataChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const updatedContactData = {
            ...contactData,
            [fieldName]: {
                ...contactData[fieldName],
                value: fieldValue,
            },
        };
        setContactData(updatedContactData);
        console.log(contactData);
    };





    return (
        <div className="contact" >
            <div className="mb-3">
                <label htmlFor="anrede" className="form-label">Anrede:</label>
                <select id="anrede" name="anrede" className="form-select" required
                    {...contactData.anrede}

                    onChange={handleDataChange}

                >
                    <option value="Herr">Herr</option>
                    <option value="Frau">Frau</option>
                    <option value="Andere">Andere</option>
                </select>
            </div>
            <TextInput
                id="name-input"
                {...contactData.name}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleDataChange}
                required
            />
            <TextInput
                {...contactData.email}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleDataChange}
                id="email-input"
            />
            <TelephoneInput
                {...contactData.telephone}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleDataChange}
                id="telephone-input"
            />
            
            <TextArea
                {...contactData.message}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleDataChange}
            />
            <div className='contact'>
                <div>
                    <input type="checkbox" id="privacy-checkbox" required /> Ich akzeptiere die <a href="https://top-lokal.at/datenschutz-impressum/" target="_blank">Datenschutzbestimmungen</a>.
                    <span style={{
                        color:
                            'red'
                    }}>*</span>
                </div>
                <div>
                    <button className="submit-btn" onClick={validateFields}>Abschließen</button>
                </div>
            </div>

        </div>

    );

}

export default Contact;