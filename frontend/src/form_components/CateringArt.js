import React, { useState } from 'react';
import { VorspeisenContainer, HauptspeisenContainer, FingerfoodContainer, BroetchenContainer, SalatContainer, DesserContainer, GetraenkeContainer } from './Akkordion';

import Tab from 'react-bootstrap/Tab';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//TODO: import react-bootstrap, change iport dir 

const CateringArt = ({ handleChange, formData }) => {
    const [selectedValue, setSelectedValue] = useState('Fingerfood');









    return (
        <div className='checkbox-container'>

            <ButtonGroup aria-label="Catering Art auswaehlen" className='my-btn-group'>
                <Button
                    name='cateringArt'
                    value={'Fingerfood'}
                    className={selectedValue === "Fingerfood" ? "my-button-active" : "my-button-inactive"}
                    onClick={(e) => {
                        setSelectedValue("Fingerfood");
                        handleChange(e);
                    }}
                >
                    Fingerfood
                </Button>
                <Button
                    name='cateringArt'
                    value={'Buffet'}
                    className={selectedValue === "Buffet" ? "my-button-active" : "my-button-inactive"}
                    onClick={(e) => {
                        setSelectedValue("Buffet");
                        handleChange(e);
                        // Hier kannst du deine handleChange-Logik einfügen, wenn nötig
                    }}
                >
                    Buffet
                </Button>
            </ButtonGroup>

            {selectedValue === 'Fingerfood' && (
                <div className='menu-container'>
                    {/* Hier den Inhalt für Option 1 einfügen */}
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" justify>
                        <Row>
                            <Col sm={2} className='my-col'>
                                <Nav variant="pills" className="flex-column" style={{height: '100%'}}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Fingerfood im Glas</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Brötchen</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth">Getränke</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>
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

            {selectedValue === 'Buffet' && (
                <div className='menu-container'>
                    {/* Hier den Inhalt für Option 2 einfügen */}

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={2} className='my-col'>
                                <Nav variant="pills" className="flex-column" style={{height: '100%'}}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"> 
                                        Vorspeisen 
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Hauptspeisen</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Salat</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">Dessert</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth">Getränke</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>
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
        </div>
    );
};

export default CateringArt;
