import { useState } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";

const StatisticLine = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th className="pr-5">{text}</th>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = ({ good, neutral, bad, allFeedback }) => {
  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={allFeedback} />
    </div>
  );
};

const Cacaocafe = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const allFeedback = good + neutral + bad;

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  return (
    <>
      <Box my={2}>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tighter">
          Give your feedback.
        </h1>
      </Box>
      <HStack spacing="24px">
        <Button onClick={handleGood}>Good</Button>
        <Button onClick={handleNeutral}>Neutral</Button>
        <Button onClick={handleBad}>Bad</Button>
        <Button onClick={handleReset}>Reset</Button>
      </HStack>
      <p className="text-xl md:text-2xl font-bold tracking-tight my-2">
        Statistics
      </p>
      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          allFeedback={allFeedback}
        />
      ) : (
        `No feedback given`
      )}
    </>
  );
};

export default Cacaocafe;
