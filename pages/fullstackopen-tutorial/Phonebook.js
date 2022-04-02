/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Button } from '@chakra-ui/react'

const initialPropsValues = {
  name: "",
  number: ""
}

const Phonebook = () => {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [inputValues, setInputValues] = useState(initialPropsValues)
  const [filteredPeople, setFilteredPeople] = useState([])
  const [searchedWord, setSearchedWord] = useState('')
  const filteredWord = !searchedWord ? people : people.filter(person => person.name.toLowerCase().includes(searchedWord.toLowerCase()))

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`${inputValues.name} and ${inputValues.number} are already added to phonebook`)
    const personObject = {
      name: inputValues.name,
      number: inputValues.number,
      id: people.length + 1
    }

    setPeople(people.concat(personObject))
    setInputValues(initialPropsValues)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  const handleSearch = (event) => {
    setSearchedWord(event.target.value)
    setFilteredPeople(filteredWord)
  }

  return (
    <div>
      <p className='text-2xl md:text-4xl font-bold tracking-tight my-2'>Phonebook Exercise</p>
      <p className='text-xl md:text-2xl font-bold tracking-tight my-2'>Phonebook</p>
      <div className="my-2">
        Search: <input value={searchedWord} onChange={handleSearch} placeholder='type a word' />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="my-2">
          Name: <input value={inputValues.name} onChange={handleInputChange} name="name" label="Name" placeholder='your name' />
        </div>

        <div className="my-2">
          Number: <input value={inputValues.number} onChange={handleInputChange} name="number" label="Number" placeholder='your phone number' />
        </div>
        <Button
          mr={2}
          colorScheme='blackAlpha'
          variant='outline'
          borderRadius='1px'
          type="submit"
        >
          Add
        </Button>
      </form>
      <p className='text-xl md:text-2xl font-bold tracking-tight my-2'>Numbers</p>
      {
        !searchedWord
          ?
          people.map(person => <p key={person.id}>{`${person.name} - ${person.number}`}</p>)
          :
          filteredWord.map(person => <p key={person.id}>{`${person.name} - ${person.number}`}</p>)
      }
    </div>
  )
}

export default Phonebook