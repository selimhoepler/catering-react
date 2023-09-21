import React, { useState, useEffect } from 'react';

// Components for Contact.js

const TextInput = (props) => (
    <div className="my-text-input">
      <label className={(props.focus || props.value !== '') ? 'label-focus' : ''} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={(props.focus || props.value !== '') ? 'input-focus' : ''}
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        id={props.id}
        required = {props.required}
        
      />
    </div>
  );

  const TelephoneInput = (props) => (
    <div className="my-text-input">
      <label className={(props.focus || props.value !== '') ? 'label-focus' : ''} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={(props.focus || props.value !== '') ? 'input-focus' : ''}
        type="tel"  // Verwenden Sie "tel" für Telefonnummer-Eingabe
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        id={props.id}
        

        required = {props.required}
      />
    </div>
  );
  
  export default TelephoneInput;
  
  
  const TextArea = props => (
    <div
      className="my-text-area">
      <label
        className={(props.focus || props.value !== '') ? 'label-focus' : ''}
        htmlFor={props.name}>{props.label}</label>
      <textarea
        className={(props.focus || props.value !== '') ? 'input-focus' : ''}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur} 
        
        />
    </div>
  );
  
  const Contact_button = props => (
    <button
      className="my-button">{props.children}</button>
  );



  export { TextInput, TextArea, Contact_button, TelephoneInput };