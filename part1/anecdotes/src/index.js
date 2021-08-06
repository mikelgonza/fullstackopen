import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({title}) => <h1>{title}</h1>

const Anecdote = ({anecdotes, selected, points}) => {

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)
  
  const calculateMostVoted = (copy) => {

    let n = 0
    let selected = 0

    for(let i = 0; i < copy.length; i++){
      if (copy[i] > n) {
        n = copy[i]
        selected = i
      }
    }

    setMostVoted(selected)
  }

  const handleAnecdoteClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const handleVoteClick = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    calculateMostVoted(copy)
  }

  return (
    <div>
      <Title title='Anecdote of the day' />
      <Anecdote anecdotes={anecdotes} points={points} selected={selected} />
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleAnecdoteClick}>next anecdote</button>
      <Title title='Anecdote with most votes' />
      <Anecdote anecdotes={anecdotes} points={points} selected={mostVoted} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
