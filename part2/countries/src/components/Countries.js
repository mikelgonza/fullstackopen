import React, { useState } from 'react'
import Country from './Country'



const Countries = ({countries, newSearch}) => {
    const [ showCountry, setShowCountry ] = useState('')

    const filter = countries.filter(country => country.name.toLowerCase().includes(newSearch.toLowerCase()))
  
    if (filter.length > 10) {

      return <div>Too many matches, specify another filter</div>

    } else if (filter.length === 1) {
      return <Country country={filter[0]} />
    }

    return (
      <div>
        {filter.map(country =>
          <div key={country.name} >
            {country.name}
            <button onClick={() => setShowCountry(country)}>Show</button>
          </div>
        )}
        {showCountry ? <Country country={showCountry} /> : <div></div> }
      </div>
    )
  }

  export default Countries