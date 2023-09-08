import React, { useState, useEffect } from 'react';
import { FruehstueckContainer } from './Akkordion';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/esm/Tabs';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

//TODO: import react-bootstrap, change iport dir 

const Fruehstueck = ({ handleChange, formData }) => {
    const [tabVariant, setTabVariant] = useState('initial');

    useEffect(() => {
        // Überprüfe die Bildschirmbreite und aktualisiere die colClass entsprechend
        const handleResize = () => {
            if (window.innerWidth >= 1300) {
                setTabVariant('initial');
            } else {
                setTabVariant('variant');
            }
        };

        // Füge einen Event-Listener hinzu, um die Bildschirmgröße zu überwachen
        window.addEventListener('resize', handleResize);

        // Initialisierung beim Laden der Komponente
        handleResize();

        // Event-Listener beim Entladen der Komponente entfernen
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);









    return (
        <div className='checkbox-container'>




            <div className='menu-container'>
                {/* Hier den Inhalt für Option 1 einfügen */}
                {tabVariant === 'initial' && (
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" justify>
                        <Row style={{ paddingLeft: '11px' }}>
                            <Col sm={2} className='my-col'>
                                <Nav variant="pills" className="flex-column" style={{ height: '100%' }}>
                                    <Nav.Item id='nav-item-breakfast'>
                                        <Nav.Link eventKey="first">Frühstück</Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </Col>
                            <Col sm={10} className='my-col-2'>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <FruehstueckContainer handleChange={handleChange} formData={formData} />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>


                )}

                {tabVariant === 'variant' && (

                    <Tabs
                        defaultActiveKey="fruhstuck"
                        id="fill-tab-example"
                        className="mb-3"
                        style={{ marginTop: '10px' }}
                        fill
                    >
                        <Tab eventKey="fruhstuck" title="Frühstück" id='nav-item-glas'>
                            <FruehstueckContainer handleChange={handleChange} formData={formData} />
                        </Tab>
                    </Tabs>



                )}
            </div>





        </div>
    );
};

export default Fruehstueck;
