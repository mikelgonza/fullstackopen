import React from 'react'

const Persons = ({ persons, newSearch }) => {

    return (
        <div>
        {persons
            .filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
            .map(person =>
              <div key={person.name} >
                {person.name} {person.number}
              </div>
          )}
          </div>
    )
}

export default Persons