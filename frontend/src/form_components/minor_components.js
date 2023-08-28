import React, { useState, useEffect} from 'react';



const MealtimeRadioGroup = ({ handleChange, formData }) => {
    return (
        <div className="card" style={{ maxWidth: '18rem' }}>
            <div className="card-header">Uhrzeit</div>
            <div className="card-body">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="mealtime"
                        id="frühstückradio"
                        value="Frühstück"
                         checked={formData.mealtime === 'Frühstück'}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="frühstückradio">
                        Frühstück
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="mealtime"
                        id="mittagRadio"
                        value="Mittag"
                          checked={formData.mealtime === 'Mittag'}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="mittagRadio">
                        Mittagessen
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="mealtime"
                        id="abendradio"
                        value="Abendessen"
                          checked={formData.mealtime === 'Abendessen'}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="abendradio">
                        Abendessen
                    </label>
                </div>
            </div>
        </div>
    );
};



const CateringGroupInput = ({ handleChange, formData }) => {
    return (
        <div id="cateringGroupContainer">
            <label htmlFor="cateringGroup" style={{ textAlign: 'center' }}>
                Anzahl der Personen 
                <small>(min. 5, max. 100)</small>:
            </label>
            <input
                type="number"
                id="cateringGroup"
                name="groupSize"
                min="5"
                max="100"
                onChange={handleChange}
                value={formData.groupSize}

            />
        </div>
    );
};





const Auststattung = ({ handleChange, formData }) => {

    useEffect(() => {
        const checkBox = document.getElementById("Stehpulte");
        const stehpulteCount = document.getElementById("stehpulteCount");

        checkBox.addEventListener('change', function () {
            if (checkBox.checked) {
                stehpulteCount.style.display = "block";
            } else {
                stehpulteCount.style.display = "none";
            }
        });
    }, []);

    return (
        <div className="card" id="ausstattung">
            <input type="checkbox" name="Geschirr" value={formData.geschirr} handleChange={ handleChange } />Geschirr / Tischwäsche
            <input type="checkbox" name='Stehpulte' id='Stehpulte' handleChange={ handleChange }/>Stehpulte + Hussen 
            <input type="number" name="stehpulteCount" id="stehpulteCount" value={formData.stehpulteCount} min="0" onChange= { handleChange } style={{display: 'none'}} />
        </div>
    );
}


export { MealtimeRadioGroup, CateringGroupInput, Auststattung }