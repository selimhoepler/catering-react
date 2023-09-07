import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';





const MealTime = ({ handleChange, formData, clearMeal, setMealtime }) => {
    const [selectedValue, setSelectedValue] = useState('Frühstück');








    return (
        <div className='mealtime-select'>

            <label htmlFor="mealtime" style={{ marginBottom: '5px', marginTop: '10px' }}>
                Wählen Sie die Art der Mahlzeit aus:
            </label>

            <ButtonGroup size="lg" id="mealtime" aria-label="Mahlzeit Art auswaehlen" className='my-btn-group'>
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