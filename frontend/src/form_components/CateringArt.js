import React, { useState } from 'react';
import { VorspeisenContainer, HauptspeisenContainer } from './Akkordion';
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//TODO: import react-bootstrap, change iport dir 

const CateringArt = ({ handleChange }) => {
    const [selectedValue, setSelectedValue] = useState('option1');


    return (
        <div className='checkbox-container'>
            <select value={selectedValue} onChange={(e) => {
                setSelectedValue(e.target.value);
                handleChange(e);
            }}>
                <option value="option1">Fingerfood</option>
                <option value="option2">Buffet </option>
            </select>

            {selectedValue === 'option1' && (
                <div className='menu-container'>
                    {/* Hier den Inhalt für Option 1 einfügen */}
                    <p>Option 1 ausgewählt!</p>
                </div>
            )}

            {selectedValue === 'option2' && (
                <div className='menu-container'>
                    {/* Hier den Inhalt für Option 2 einfügen */}
                    <p>Buffet ausgewählt!</p>

                    <Tabs
                        defaultActiveKey="profile"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="home" title="Vorspeisen">
                            <VorspeisenContainer handleChange={handleChange} />
                        </Tab>
                        <Tab eventKey="profile" title="hauptspeisen">
                            <HauptspeisenContainer handleChange={handleChange} />
                        </Tab>
                        <Tab eventKey="longer-tab" title="Alkoholfreie Getränke">
                            Tab content for Loooonger Tab
                        </Tab>
                        <Tab eventKey="contact" title="Alkoholisches" disabled>
                            Tab content for Contact
                        </Tab>
                    </Tabs>


                    {/* <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Vorspeisen</Accordion.Header>
                            <Accordion.Body>
                            <VorspeisenContainer handleChange={handleChange} />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Hauptspeisen</Accordion.Header>
                            <Accordion.Body>
                            <HauptspeisenContainer handleChange={handleChange} />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion> */}
                </div>


            )}
        </div>
    );
};

export default CateringArt;
