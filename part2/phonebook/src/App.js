import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ personsFiltered, setPersonFiltered ] = useState(persons)

  const addPerson = (event) => {
    event.preventDefault()

    if(persons.find(person => person.name === newName)){
        alert(`${newName} is already added to phonebook`)
        setNewName('')
        setNewNumber('')
    }
    else {
        const personObject = {name: newName, number: newNumber}
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    const filter = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setPersonFiltered(filter)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input value={newSearch} onChange={handleSearchChange} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson} >
        <div>
          name:
          <input
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsFiltered.map(person =>
        <div key={person.name} >
          {person.name} {person.number}
        </div>
      )}
    </div>
  )
}

export default App