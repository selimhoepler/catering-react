import React, { useEffect, useState } from 'react';


const GroupSizeInfo = ({ formData }) => {

    const [groupinfo, setgroupinfo] = useState ('5-20');
    const [maxmeals, setmaxmeals] = useState ('3');




    
    useEffect(() => {




        var size = formData.groupSize

        if (size < 21) { 
            setgroupinfo('5-20');
            setmaxmeals('3');
        }

        else if (size > 20 && size < 41) { 
            setgroupinfo ('21 - 40');
            setmaxmeals ('4');    
        }

        else if (size > 40 && size < 81) { 
            setgroupinfo ('41 - 80');
            setmaxmeals ('5');
         }
        else if (size > 80 && size < 101) { 
            setgroupinfo ('81 - 100');
            setmaxmeals ('6');
         }
        else if (size > 100 ) { 
            setgroupinfo ('100+');
            setmaxmeals ('unebgrenzt viele'); }

            console.log(groupinfo);
            console.log(maxmeals);


    }, [formData.groupSize])









    return (
        <div className='card info-card shadowy' style={{ marginTop: '20px', overflow: 'hidden' }}>
            <div className='card-header'> INFO </div>
            <div className='card-body' id='gerichte'>
                <strong>Für eine Gruppengröße von {groupinfo} Personen</strong>
                <br />
                <small>Können {maxmeals} Gerichte pro Kategorie ausgewählt werden</small>
            </div>
        </div>
    );
};

export default GroupSizeInfo;