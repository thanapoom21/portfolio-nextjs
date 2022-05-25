import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  HStack,
  Input,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const CountryList = () => {
  const [word, setWord] = useState({ hits: [] });
  const [query, setQuery] = useState("javascript");
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=javascript"
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
        <h1 className="text-2xl md:text-4xl font-bold tracking-tighter">{`Search for topic you're interested in.`}</h1>
      </Box>
      <div className="my-2">
        <HStack spacing="24px">
          <Box>
            <Input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </Box>
          <Box>
            <Button
              type="button"
              onClick={() =>
                setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
              }
            >
              Search
            </Button>
          </Box>
        </HStack>

        <Box my={2}>
          {isError && <div>Something went wrong....</div>}

          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <UnorderedList>
              {word.hits.map(item => (
                <ListItem key={item.objectID}>
                  <a href={item.url}>{item.title}</a>
                </ListItem>
              ))}
            </UnorderedList>
          )}
        </Box>
      </div>
    </>
  );
};

export default CountryList;
