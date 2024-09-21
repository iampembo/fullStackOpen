import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const random = Math.floor(Math.random() * anecdotes.length);
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleNext = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;  
    setVotes(newVotes);
  };

  const maxVotes = Math.max(...votes);
  const mostVotes = votes.indexOf(maxVotes);


  return (
    <div>
      <h1>Anecdotes</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={handleNext}>Next anecdote</button>
      <button onClick={handleVote} index={selected}>Vote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[mostVotes]}</p>
      <p>Has {maxVotes} votes</p>
    </div>
  )
}

export default App


