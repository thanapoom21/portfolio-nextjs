import { useState } from "react";
import { Box, Button, Divider, HStack } from "@chakra-ui/react";

const quotes = [
  `"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler`,
  `"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie`,
  `"Sometimes it's better to leave something alone, to pause, and that's very true of programming." - Joyce Wheeler`,
  `"Testing leads to failure, and failure leads to understanding." - Burt Rutan`,
  `"The best error message is the one that never shows up." - Thomas Fuchs`,
  `"The most damaging phrase in the language is it's always been done this way." - Grace Hopper`,
  `"Don't write better error messages, write code that doesn't need them." - Jason C. McDonald`,
  `"Make it work, make it right, make it fast." - Kent Beck`,
  `"Programming isn't about what you know; it's about what you can figure out." - Chris Pine`,
];

const randomize = array => {
  return Math.round(Math.random() * (array.length - 1));
};

const Quote = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(quotes.length).fill(0));
  const mostVotes = Math.max(...points);

  const handleClick = () => {
    const selectedQuote = randomize(quotes);
    setSelected(selectedQuote);
  };

  const handleVote = () => {
    const copiedPoints = [...points];
    copiedPoints[selected] += 1;
    setPoints(copiedPoints);
  };

  return (
    <>
      <Box my={2}>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tighter">
          Vote the quote you like the most.
        </h1>
      </Box>
      <HStack spacing="24px">
        <Button onClick={handleVote}>Vote</Button>
        <Button onClick={handleClick}>Next Quote</Button>
      </HStack>
      <Box my={2}>
        <p className="text-xl md:text-2xl font-bold tracking-tighter">
          Quote of The Day
        </p>
        <p>{quotes[selected]}</p>
        <p>has {points[selected]} vote</p>
      </Box>

      <Divider />

      <Box my={2}>
        <p className="text-xl md:text-2xl font-bold tracking-tighter">
          Quote with The Most Votes
        </p>
        {quotes[points.indexOf(mostVotes)]}
        <p>has {mostVotes} vote</p>
      </Box>
    </>
  );
};

export default Quote;
