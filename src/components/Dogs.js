import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

export default function Dogs() {
    const [ allDogs, setAllDogs ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/pets")
        .then(response => response.json())
        .then(json => {
            setAllDogs(json);
        })
    }, []);

    return(
        <React.Fragment>
            <h1>Rescued Dogs</h1>
            <ul>
                { allDogs.map( (dog) => {
                    if (dog.type==="dog") {
                        return <React.Fragment key={dog.id}><li><Link to={`/dogs/${dog.id}`}>{dog.name}</Link></li></React.Fragment>
                    }
                })}
            </ul>
        </React.Fragment>
    );
}