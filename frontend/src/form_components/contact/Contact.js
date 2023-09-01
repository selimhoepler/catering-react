import React, { useState, useEffect } from 'react';
import { TextInput, TextArea, Contact_button, TelephoneInput} from './Contact-components';



const Contact = () => {


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
        }
    });





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

    const handleChange = (e) => {
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
    };





    return (
        <div className="contact">
            <TextInput
                {...contactData.name}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            <TextInput
                {...contactData.email}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            <TelephoneInput
                {...contactData.telephone}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            <TextArea
                {...contactData.message}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />

        </div>

    );

}

export default Contact;