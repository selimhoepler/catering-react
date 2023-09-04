import React, { useState } from 'react';
import { VorspeisenContainer, HauptspeisenContainer, FingerfoodContainer, BroetchenContainer, SalatContainer, DesserContainer, GetraenkeContainer } from './Akkordion';

import Tab from 'react-bootstrap/Tab';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//TODO: import react-bootstrap, change iport dir 

const CateringArt = ({ handleChange, formData, clearMeal }) => {
    const [selectedValue, setSelectedValue] = useState('Fingerfood');


const handleSelect = () => {

    clearMeal();

}






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
                        handleSelect();
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
                        handleSelect();
                    }}
                >
                    Buffet
                </Button>
            </ButtonGroup>

            {selectedValue === 'Fingerfood' && (
                <div className='menu-container'>
                    {/* Hier den Inhalt für Option 1 einfügen */}
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" justify>
                        <Row style={{paddingLeft: '11px'}}>
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

            {selectedValue === 'Buffet' && (
                <div className='menu-container'>
                    {/* Hier den Inhalt für Option 2 einfügen */}

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row style={{paddingLeft: '11px'}}>
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
        </div>
    );
};

export default CateringArt;
