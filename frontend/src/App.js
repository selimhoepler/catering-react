import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from './Form';


// Only Form component from Form.js rendered here


function App() {
  return (
      <div className='menuContainer'>
        {/* <h2>Unverbindliche Catering Anfrage</h2> */}
        <Form />
      </div>
      
    );
}

export default App;
