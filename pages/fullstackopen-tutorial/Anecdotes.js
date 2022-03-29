import { useState } from 'react'
import { Button } from '@chakra-ui/react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
]

const randomize = (array) => {
  return Math.round(Math.random() * (array.length - 1))
}

const Anecdotes = () => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const mostVotes = Math.max(...points)

  const handleClick = () => {
    const selectedAnecdote = randomize(anecdotes)
    setSelected(selectedAnecdote)
  }

  const handleVote = () => {
    const copiedPoints = [...points]
    copiedPoints[selected] += 1
    setPoints(copiedPoints)
  }

  return (
    <div>
      <p className='text-xl md:text-2xl font-bold tracking-tight my-2'>
        Anecdotes of The Day
      </p>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} vote</p>
      <Button
        mr={2}
        colorScheme='blackAlpha'
        variant='outline'
        borderRadius='1px'
        onClick={handleVote}
      >
        Vote
      </Button>
      <Button
        mr={2}
        colorScheme='blackAlpha'
        variant='outline'
        borderRadius='1px'
        onClick={handleClick}
      >
        Next Anecdotes
      </Button>

      <p className='text-xl md:text-2xl font-bold tracking-tight my-2'>
        Anecdote with The Most Votes
      </p>
      {anecdotes[points.indexOf(mostVotes)]}
      <p>has {mostVotes} vote</p>
    </div>
  )
}

export default Anecdotes
