import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries

    return (
        <div>
            <h1>hello: {countries.length}</h1>
            {
                countries.map(country => <Country></Country>)
            }
        </div>
    );
};

export default Countries;