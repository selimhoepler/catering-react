import React, { useState } from 'react';
import {FruehstueckContainer} from './Akkordion';

import Tab from 'react-bootstrap/Tab';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

//TODO: import react-bootstrap, change iport dir 

const Fruehstueck = ({ handleChange, formData}) => {









    return (
        <div className='checkbox-container'>

            


                <div className='menu-container'>
                    {/* Hier den Inhalt für Option 1 einfügen */}
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" justify>
                        <Row style={{paddingLeft: '11px'}}>
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
                </div>
                            
                



        </div>
    );
};

export default Fruehstueck;
