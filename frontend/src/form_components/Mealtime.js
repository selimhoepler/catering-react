import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

/* Buttongoup that lets you decide between which mealtime and then sets the mealtime for trhe Form component in form.js */



const MealTime = ({ handleChange, formData, clearMeal, setMealtime }) => {
    const [selectedValue, setSelectedValue] = useState('Frühstück');
    const [btnSize, setBtnSize] = useState('lg');
    const [landscape, setLandscape] = useState(false);



    //resizes component and stacks it vertical after a specific width
    // had to do it this way because it is a react-bootstrap comp where changing styles in CSS is alot more tedious lmao
    useEffect(() => {
        // Überprüfe die Bildschirmbreite und aktualisiere die colClass entsprechend
        const handleResize = () => {
            if (window.innerWidth >= 1300) {
                setBtnSize('lg');
                setLandscape(false);
            } else if (window.innerWidth <= 900 && window.innerWidth > 630) {
                setBtnSize('sm');
                setLandscape(false);
            } else if (window.innerWidth <= 630) {
                setLandscape(true);

            } else {
                setBtnSize('md');
                setLandscape(false);

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
        <div className='mealtime-select'>

            <label htmlFor="mealtime" style={{ marginBottom: '5px', marginTop: '10px' }}>
                Wählen Sie die Art der Mahlzeit aus:
            </label>

            {landscape === false && (

                <ButtonGroup size={btnSize} id="mealtime" aria-label="Mahlzeit Art auswaehlen" className='my-btn-group'>
                    <Button
                        name='mealtime'
                        value='Frühstück'
                        className={selectedValue === "Frühstück" ? "my-button-active" : "my-button-inactive"}
                        onClick={(e) => {
                            setSelectedValue("Frühstück");
                            handleChange({ name: 'mealtime', value: 'Frühstück' });
                            setMealtime('fruehstueck');
                            clearMeal();
                        }}
                    >
                        Frühstück
                    </Button>
                    <Button
                        name='mealtime'
                        value='Mittag'
                        className={selectedValue === "Mittag" ? "my-button-active" : "my-button-inactive"}
                        onClick={(e) => {
                            setSelectedValue("Mittag");
                            handleChange({ name: 'mealtime', value: 'Mittag' });
                            setMealtime('mittag');
                            clearMeal();
                        }}
                    >
                        Mittag/Abendessen
                    </Button>
                </ButtonGroup>

            )}

            {landscape === true && (
                <ButtonGroup vertical size={btnSize} id="mealtime" aria-label="Mahlzeit Art auswaehlen" className='my-btn-group'>
                    <Button
                        name='mealtime'
                        value='Frühstück'
                        className={selectedValue === "Frühstück" ? "my-button-active" : "my-button-inactive"}
                        onClick={(e) => {
                            setSelectedValue("Frühstück");
                            handleChange(e);
                            setMealtime('fruehstueck');
                            clearMeal();
                        }}
                    >
                        Frühstück
                    </Button>
                    <Button
                        name='mealtime'
                        value='Mittag'
                        className={selectedValue === "Mittag" ? "my-button-active" : "my-button-inactive"}
                        onClick={(e) => {
                            setSelectedValue("Mittag");
                            handleChange(e);
                            setMealtime('mittag');
                            clearMeal();
                        }}
                    >
                        Mittag/Abendessen
                    </Button>
                </ButtonGroup>

            )}

        </div>

    );

};

export default MealTime;