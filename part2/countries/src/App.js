import React, { useState, useEffect } from 'react'
import Countries from './components/Countries'
import axios from 'axios'


const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ newSearch, setNewSearch ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      find countries <input value={newSearch} onChange={handleSearchChange} />
      <Countries countries={countries} newSearch={newSearch} />
    </div>
  )
}

export default App;
