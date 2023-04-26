import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

export default function Cats() {
    const [ allCats, setAllCats ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/pets")
        .then(response => response.json())
        .then(json => {
            setAllCats(json);
        })
    }, []);


    return(
        <React.Fragment>
            <h1>Rescued Cats</h1>
            <ul>
                { allCats.map( (cat) => {
                    if (cat.type==="cat") {
                        return <React.Fragment key={cat.id}><li><Link to={`/cats/${cat.id}`}>{cat.name}</Link></li></React.Fragment>
                    }
                })}
            </ul>
        </React.Fragment>
    );
}