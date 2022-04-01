import { useState } from "react"
import { Button } from '@chakra-ui/react'

const Phonebook = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`${newName} and ${newNumber} are already added to phonebook`)
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <p className='text-2xl md:text-4xl font-bold tracking-tight my-2'>Phonebook Exercise</p>
      <p className='text-xl md:text-2xl font-bold tracking-tight my-2'>Phonebook</p>
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          Name: <input value={newName} onChange={handleChangeName} placeholder='your name' />
        </div>

        <div className="my-2">
          Number: <input value={newNumber} onChange={handleChangeNumber} placeholder='your phone number' />
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
      {persons.map(p => <p key={p.number}>{`${p.id}. ${p.name} & ${p.number}`}</p>)}
    </div>
  )
}

export default Phonebook