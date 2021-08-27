import React from 'react'

const Countries = ({countries, newSearch}) => {

    const filter = countries.filter(country => country.name.toLowerCase().includes(newSearch.toLowerCase()))
  
    if (filter.length > 10) {
        
      return <div>Too many matches, specify another filter</div>

    } else if (filter.length === 1) {
      return (
        <div>
            <div>
              <h1>{filter[0].name}</h1>
              <div>Capital: {filter[0].capital}</div>
              <div>Population: {filter[0].population}</div>
              <h3>Languages</h3>
              <ul>
                {filter[0].languages.map(language =>
                  <li key={language.name}>{language.name}</li>
                )}
              </ul>
              <img src={filter[0].flag} alt='Flag' width='100px' />
            </div>
        </div>      
      )
    }
  
    return (
      <div>
        {filter.map(country =>
          <div key={country.name} >
            {country.name}
          </div>
        )}
      </div>
    )
  }

  export default Countries