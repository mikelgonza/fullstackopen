import React from 'react'

const Country = ({country}) => {

    return (
        <div>
            <div>
            <h1>{country.name}</h1>
            <div>Capital: {country.capital}</div>
            <div>Population: {country.population}</div>
            <h3>Languages</h3>
            <ul>
                {country.languages.map(language =>
                <li key={language.name}>{language.name}</li>
                )}
            </ul>
            <img src={country.flag} alt='Flag' width='100px' />
            </div>
        </div>      
    )
}

export default Country