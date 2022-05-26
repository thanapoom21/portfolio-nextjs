import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Input } from "@chakra-ui/react";

const CountryList = () => {
  const [list, setList] = useState([]);
  const [searchedWord, setSearchedWord] = useState("");
  const filteredCountries = !searchedWord
    ? list
    : list.filter(country =>
        country.name.common.toLowerCase().includes(searchedWord.toLowerCase())
      );

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(response => {
      setList(response.data);
    });
  }, []);

  const handleSearch = event => {
    setSearchedWord(event.target.value);
  };

  const generateKey = pre => {
    return `${pre}_${new Date().getTime()}`;
  };

  return (
    <>
      <Box my={2}>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tighter">{`Type a character to find countrie(s).`}</h1>
      </Box>
      <div className="my-2">
        Find countries:{" "}
        <Input
          value={searchedWord}
          onChange={handleSearch}
          placeholder="type a word"
        />
      </div>
      <p className="text-xl md:text-2xl font-bold tracking-tight my-2">
        {searchedWord ? `Found it:` : null}
      </p>
      <ul>
        {!searchedWord
          ? null
          : filteredCountries.map(country => (
              <li
                key={generateKey(country.name.common)}
              >{`${country.name.common}`}</li>
            ))}
      </ul>
    </>
  );
};

export default CountryList;
