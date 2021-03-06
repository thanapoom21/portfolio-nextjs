import axios from "axios";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  HStack,
  Input,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";

const DefinitionList = ({ shortdef }) => {
  return (
    <OrderedList>
      {shortdef.map(definition => (
        <ListItem key={definition}>{definition}</ListItem>
      ))}
    </OrderedList>
  );
};

const WordSearch = () => {
  const [word, setWord] = useState([]);
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState(
    `https://www.dictionaryapi.com/api/v3/references/collegiate/json/documentation?key=5baefa86-4adc-4bb6-a109-4b6cb3905876`
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setWord(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return (
    <>
      <Box my={2}>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tighter">{`Search for words you want from Merriam-Webster Dictionary API`}</h1>
      </Box>
      <div className="my-2">
        <form
          onSubmit={event => {
            setUrl(
              `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${query}?key=5baefa86-4adc-4bb6-a109-4b6cb3905876`
            );

            event.preventDefault();
          }}
        >
          <HStack spacing="24px">
            <Box>
              <Input
                isRequired
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
              />
            </Box>
            <Box>
              <Button type="submit">Search</Button>
            </Box>
          </HStack>
        </form>
        <Box my={2}>
          {isError && <div>Something went wrong....</div>}

          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {word.length > 0 &&
                word.map(item => (
                  <Box key={item.meta.uuid}>
                    <Text className="text-2xl md:text-4xl font-bold tracking-tighter">{`${item.meta.id}`}</Text>
                    <Text>Part of Speech - {item.fl}</Text>
                    <DefinitionList shortdef={item.shortdef} />
                  </Box>
                ))}
            </>
          )}
        </Box>
      </div>
    </>
  );
};

export default WordSearch;
