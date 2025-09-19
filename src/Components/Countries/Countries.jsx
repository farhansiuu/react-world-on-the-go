import React, { use, useState } from 'react';
import Country from '../Country/Country'
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const handleCountries = (country) => {
        console.log('Visisted countries', country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries

    return (
        <div>
            <h1>All countries: {countries.length}</h1>
            <h2>Total Visited Countries: {visitedCountries.length}</h2>
            <ol>
                {
                    visitedCountries.map(country=> <li key={country.cca3.cca3}> {country.name.common} </li> )
                }
            </ol>
            <div className='countries'>
                {

                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country} handleCountries={handleCountries}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;