import React, { useState, useEffect } from 'react';
import { TextInput, TextArea, Contact_button, TelephoneInput } from './Contact-components';



const Contact = ({ onSubmit, formData }) => {


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
                {...contactData.name}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleDataChange}
            />
            <TextInput
                {...contactData.email}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleDataChange}
            />
            <TelephoneInput
                {...contactData.telephone}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleDataChange}
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
                    <button className="submit-btn" onClick={handleSubmit}>Abschließen</button>
                </div>
            </div>

        </div>

    );

}

export default Contact;