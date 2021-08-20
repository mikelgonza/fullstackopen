import React from 'react';

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ parts }) => {
  
    const total = parts.reduce((sum,part) => {
        return sum + part.exercises
    }, 0)
  
    return(
      <h3>total of {total} exercises</h3>
    ) 
  }
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )} 
      </div>
    )
  }
  
  const Course = ({ course }) => {
  
    return(
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

export default Course