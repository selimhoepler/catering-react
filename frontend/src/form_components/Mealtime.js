import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';





const MealTime = ({ handleChange, formData, clearMeal, setMealtime }) => {
    const [selectedValue, setSelectedValue] = useState('Frühstück');
    const[btnSize, setBtnSize] = useState('lg');

    useEffect(() => {
        // Überprüfe die Bildschirmbreite und aktualisiere die colClass entsprechend
        const handleResize = () => {
            if (window.innerWidth >= 1300) {
                setBtnSize('lg');
            } else {
                setBtnSize('md');
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

            <ButtonGroup size={btnSize} id="mealtime" aria-label="Mahlzeit Art auswaehlen" className='my-btn-group'>
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

        </div>

    );

};

export default MealTime;