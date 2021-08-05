import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const DisplayTitle = ({title}) => <h1>{title}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const DisplayStat = ({text, number}) => <div>{text} {number}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)

  const handleNeutralClick = () => setNeutral(neutral + 1)

  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <DisplayTitle title = 'Give Feedback' />
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <DisplayTitle title = 'statistics' />
      <DisplayStat text = 'Good' number = {good} />
      <DisplayStat text = 'Neutral' number = {neutral} />
      <DisplayStat text = 'Bad' number = {bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)