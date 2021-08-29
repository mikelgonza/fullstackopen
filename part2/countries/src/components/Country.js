import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Country = ({country}) => {

    const [ weather, setWeather ] = useState('')

    useEffect(() => {
        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: country.name
        }

        axios
          .get('http://api.weatherstack.com/current', {params})
          .then(response => {
            setWeather(response.data.current)
          })
    }, [country.name])

    return (
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
            {weather ?
              <div>
                <h3>Weather in {country.name}</h3>
                <div>Temperature: {weather.temperature} Celcius</div>
                {weather.weather_icons.map(icon =>
                    <img key={icon} src={icon} alt='weather' width='100px' />
                )}
                <div>Wind: {weather.wind_speed} mph direction {weather.wind_dir}</div>
              </div> : 
              <div></div>
            }
        </div>      
    )
}

export default Country