import React, { useState, useEffect } from 'react';
import { VorspeisenContainer, HauptspeisenContainer, FingerfoodContainer, BroetchenContainer, SalatContainer, DesserContainer, GetraenkeContainer } from './Akkordion';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


/* buttongroup that lets user switch between fingerfood and buffet
    calls clearMeal on change which clears everything in formData.meal and fromData.drinks

    Container which shows all the checkbox Components form Akkordion.js
    The const  tabVariant decides between which tab variant is rendered. 

    So there is either the 'initial' way and then the const selectedvalue decides if it is fingerood or buffet.
    or the 'variant' which also has a condition inside, decideing between fingerfood and buffet

    

*/




const CateringArt = ({ handleChange, formData, clearMeal }) => {
    const [selectedValue, setSelectedValue] = useState(formData.cateringArt);
    const [tabVariant, setTabVariant] = useState('initial');

    console.log(selectedValue)





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






/*     const handleSelect = () => {

        clearMeal();

    } */






    return (
        <div className='checkbox-container'>



            <ButtonGroup size="lg" aria-label="Catering Art auswaehlen" className='my-btn-group'>
                <Button
                    name='cateringArt'
                    value='Fingerfood'
                    className={selectedValue === "Fingerfood" ? "my-button-active" : "my-button-inactive"}
                    onClick={(e) => {
                        setSelectedValue("Fingerfood");
                        handleChange(e);
                        // handleSelect();
                    }}
                >
                    Fingerfood
                </Button>
                <Button
                    name='cateringArt'
                    value='Buffet'
                    className={selectedValue === "Buffet" ? "my-button-active" : "my-button-inactive"}
                    onClick={(e) => {
                        setSelectedValue("Buffet");
                        handleChange(e);
                        // handleSelect();
                    }}
                >
                    Buffet
                </Button>
            </ButtonGroup>
            {tabVariant === 'initial' &&

                selectedValue === 'Fingerfood' && (
                    <div className='menu-container'>
                        {/* Hier den Inhalt für Option 1 einfügen */}
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first" justify>
                            <Row style={{ paddingLeft: '11px' }}>
                                <Col sm={2} className='my-col'>
                                    <Nav variant="pills" className="flex-column" style={{ height: '100%' }}>
                                        <Nav.Item id='nav-item-glas'>
                                            <Nav.Link eventKey="first">Fingerfood im Glas</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item id='nav-item-bread'>
                                            <Nav.Link eventKey="second">Brötchen</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item id='nav-item-drinks'>
                                            <Nav.Link eventKey="fifth">Getränke</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={10} className='my-col-2'>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <FingerfoodContainer handleChange={handleChange} formData={formData} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <BroetchenContainer handleChange={handleChange} formData={formData} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth">
                                            <GetraenkeContainer handleChange={handleChange} />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                )}

            {tabVariant === 'initial' &&











                selectedValue === 'Buffet' && (
                    <div className='menu-container'>
                        {/* Hier den Inhalt für Option 2 einfügen */}

                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row style={{ paddingLeft: '11px' }}>
                                <Col sm={2} className='my-col'>
                                    <Nav variant="pills" className="flex-column" style={{ height: '100%' }}>
                                        <Nav.Item id='nav-item-starters'>
                                            <Nav.Link eventKey="first">
                                                Vorspeisen

                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item id='nav-item-main'>
                                            <Nav.Link eventKey="second">Hauptspeisen
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item id='nav-item-salad'>
                                            <Nav.Link eventKey="third">Salat</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item id='nav-item-dessert'>
                                            <Nav.Link eventKey="fourth">Dessert</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item id='nav-item-drinks'>
                                            <Nav.Link eventKey="fifth">Getränke</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={10} className='my-col-2'>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <VorspeisenContainer handleChange={handleChange} formData={formData} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <HauptspeisenContainer handleChange={handleChange} formData={formData} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <SalatContainer handleChange={handleChange} formData={formData} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            <DesserContainer handleChange={handleChange} formData={formData} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth">
                                            <GetraenkeContainer handleChange={handleChange} />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>

                    </div>


                )}
            {tabVariant === 'variant' &&
                selectedValue === 'Fingerfood' && (
                    <Tabs
                        defaultActiveKey="glas"
                        id="fill-tab-example"
                        className="mb-3"
                        style={{ marginTop: '10px' }}
                        fill
                    >
                        <Tab.Pane eventKey="glas" title="Fingerfood im Glas" id='nav-item-glas'>
                            <FingerfoodContainer handleChange={handleChange} formData={formData} />
                        </Tab.Pane>
                        <Tab eventKey="Broetchen" title="Brötchen">
                            <BroetchenContainer handleChange={handleChange} formData={formData} />
                        </Tab>
                        <Tab eventKey="drinks" title="Getränke">
                            <GetraenkeContainer handleChange={handleChange} />
                        </Tab>
                    </Tabs>
                )
            }

            {tabVariant === 'variant' &&
                selectedValue === 'Buffet' && (


                    <Tabs
                        defaultActiveKey="starters"
                        id="fill-tab-example"
                        className="mb-3"
                        style={{ marginTop: '10px' }}
                        fill
                    >
                        <Tab eventKey="starters" title="Vorspeisen" id='nav-item-glas'>
                            <VorspeisenContainer handleChange={handleChange} formData={formData} />
                        </Tab>
                        <Tab eventKey="main" title="Hauptspeisen">
                            <HauptspeisenContainer handleChange={handleChange} formData={formData} />
                        </Tab>
                        <Tab eventKey="salat" title="Salat">
                            <SalatContainer handleChange={handleChange} />
                        </Tab>
                        <Tab eventKey="dessert" title="Dessert">
                            <DesserContainer handleChange={handleChange} />
                        </Tab>
                        <Tab eventKey="drinks" title="Getränke">
                            <GetraenkeContainer handleChange={handleChange} />
                        </Tab>
                    </Tabs>

                )

            }

        </div>
    );
};

export default CateringArt;
