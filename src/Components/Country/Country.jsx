import React, { useState } from 'react';
import './Country.css'
const Country = ({ country, handleCountries }) => {
    const [visited, setVisited] = useState(false)
     
    const handleClick = () => {
        // setVisited(true)
        // if (visited) {
        //     setVisited(false)
        // }
        // else {
        //     setVisited(true)
        // }
        setVisited(!visited)
        handleCountries(country)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>name: {country.name.common}</h3>
            <p>population: {country.population.population}</p>
            <p>Area: {country.area.area}{country.area.area > 300000 ? 'Big Country' : 'small'}</p>
            <button onClick={handleClick}>{visited ? 'Visited' : 'Not Visited'} </button>
            
        </div>
    );
};

export default Country;