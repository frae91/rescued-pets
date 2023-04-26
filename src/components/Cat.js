import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function Cat() {
    const [ info, setInfo ] = useState(null);
    const params = useParams();

    useEffect( () => {
        fetch('http://localhost:3001/pets/' + params.id)
        .then(response => response.json())
        .then(json => {
            if (json.type === "cat") {
                setInfo(json);
            } else {
                setInfo({});
            }
        });
    }, [])

    return (
        <React.Fragment>
            { (info && info.id) 
            ?
                <div>
                    <h1>{info.name}</h1>
                    <h3>Breed: {info.breed}</h3>
                    <h4>Date rescued: {info.date_rescued}</h4>
                </div>
            :
            <h2>ERROR: No Cat found!</h2>
            }
        </React.Fragment>
    )
}