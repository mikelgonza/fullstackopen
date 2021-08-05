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
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)

    const positive = ((good + 1) * 100) / (all + 1)
    const negative = (bad * 100) / (all + 1)

    setPositive(positive)
    setAverage((positive - negative) / 100)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)

    const positive = (good * 100) / (all + 1)
    const negative = (bad * 100) / (all + 1)

    setPositive(positive)
    setAverage((positive - negative) / 100)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)

    const positive = (good * 100) / (all + 1)
    const negative = ((bad + 1) * 100) / (all + 1)

    setPositive(positive)
    setAverage((positive - negative) / 100)
  }

  return (
    <div>
      <DisplayTitle title = 'Give Feedback' />
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <DisplayTitle title='statistics' />
      <DisplayStat text='Good' number={good} />
      <DisplayStat text='Neutral' number={neutral} />
      <DisplayStat text='Bad' number={bad} />
      <DisplayStat text='All' number={all} />
      <DisplayStat text='Average' number={average} />
      <DisplayStat text='Positive' number={positive + ' %'} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)