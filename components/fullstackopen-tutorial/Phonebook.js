/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Box, Button, HStack, Input } from "@chakra-ui/react";

const initialPropsValues = {
  name: "",
  number: "",
};

const Filter = ({ value, onChange }) => {
  return (
    <div className="my-2">
      Search:{" "}
      <Input value={value} onChange={onChange} placeholder="type a word" />
    </div>
  );
};

const People = ({ searchedWord, people, filteredWord }) => {
  const initPeople = people.map(person => (
    <p key={person.id}>{`${person.name} - ${person.number}`}</p>
  ));
  const filteredPeople = filteredWord.map(person => (
    <p key={person.id}>{`${person.name} - ${person.number}`}</p>
  ));
  return <div>{!searchedWord ? initPeople : filteredPeople}</div>;
};

const Phonebook = () => {
  const [people, setPeople] = useState([
    { name: "Arsene Wenger", number: "702-465-1115", id: 1 },
    { name: "Jose Mourinho", number: "702-465-2224", id: 2 },
    { name: "Alex Ferguson", number: "215-225-1189", id: 3 },
    { name: "Antonio Conte", number: "618-981-1646", id: 4 },
  ]);

  // const [people, setPeople] = useState([])

  // people.json has to be run before fetching data from server.
  // useEffect(() => {
  //   axios.get('http://localhost:3001/persons').then(response => {
  //     setPeople(response.data)
  //     console.log(response.data)
  //   })
  // }, [])

  const [inputValues, setInputValues] = useState(initialPropsValues);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [searchedWord, setSearchedWord] = useState("");
  const filteredWord = !searchedWord
    ? people
    : people.filter(person =>
        person.name.toLowerCase().includes(searchedWord.toLowerCase())
      );

  const handleSubmit = event => {
    event.preventDefault();
    alert(
      `${inputValues.name} and ${inputValues.number} are already added to phonebook`
    );
    const personObject = {
      name: inputValues.name,
      number: inputValues.number,
      id: people.length + 1,
    };

    setPeople(people.concat(personObject));
    setInputValues(initialPropsValues);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSearch = event => {
    setSearchedWord(event.target.value);
    setFilteredPeople(filteredWord);
  };

  return (
    <>
      <Box my={2}>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tighter">
          Create a contact & search for it in Phonebook
        </h1>
      </Box>

      <form onSubmit={handleSubmit}>
        <HStack spacing="24px">
          <Filter value={searchedWord} onChange={handleSearch} />
          <Box className="my-2">
            Name:{" "}
            <Input
              value={inputValues.name}
              onChange={handleInputChange}
              name="name"
              label="Name"
              placeholder="type a name"
            />
          </Box>

          <Box className="my-2">
            Number:{" "}
            <Input
              value={inputValues.number}
              onChange={handleInputChange}
              name="number"
              label="Number"
              placeholder="type phone numbers"
            />
          </Box>
        </HStack>
        <Button type="submit">Add</Button>
      </form>
      <h2 className="text-xl md:text-2xl font-bold tracking-tight my-2">
        Numbers
      </h2>
      <People
        searchedWord={searchedWord}
        people={people}
        filteredWord={filteredWord}
      />
    </>
  );
};

export default Phonebook;
