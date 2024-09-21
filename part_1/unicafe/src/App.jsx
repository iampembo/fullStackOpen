import { useState } from 'react'

const Button = ({handleClick, name}) => {
  return (
    <button onClick={handleClick}>{name}</button>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
      <tr>
        <td>{text} {value}</td>
      </tr>
  )
}

const Statistics = ({good, neutral, bad, clicks}) => {
  if (clicks === 0) {
    return (
      <>
        <p>Give feedback to view stats</p>
      </>
    )
  }

  const average = ((bad *-1) + (good)) / clicks;
  const percentage = (good / clicks) * 100;

  return (
    <table>
      <tbody>
        <StatisticsLine text='Good' value={good}/>
        <StatisticsLine text='Neutral' value={neutral}/>
        <StatisticsLine text='Bad' value={bad}/>
        <StatisticsLine text='Total' value={clicks}/>
        <StatisticsLine text='Average' value={average}/>
        <StatisticsLine text='Positive' value={percentage}/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState(0)

  const SetGoodClick = () => {
    setGood(good + 1);
    setClicks(clicks + 1)
  }

  const SetNeutralClick = () => {
    setNeutral(neutral + 1);
    setClicks(clicks + 1)
  }

  const SetBadClick = () => {
    setBad(bad + 1);
    setClicks(clicks + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={SetGoodClick} name='good'/>
      <Button handleClick={SetNeutralClick} name='neutral'/>
      <Button handleClick={SetBadClick} name='bad'/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} clicks={clicks} />
    </div>
  )
}

export default App
