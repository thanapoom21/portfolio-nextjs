import { useState } from "react";
import { Button } from "@chakra-ui/react";

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

const Unicafe = () => {
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
    <div>
      <p className="text-xl md:text-2xl font-bold tracking-tight my-2">
        Give your feedback here
      </p>
      <Button
        mr={2}
        colorScheme="blackAlpha"
        variant="outline"
        borderRadius="1px"
        onClick={handleGood}
      >
        Good
      </Button>
      <Button
        mr={2}
        colorScheme="blackAlpha"
        variant="outline"
        borderRadius="1px"
        onClick={handleNeutral}
      >
        Neutral
      </Button>
      <Button
        mr={2}
        colorScheme="blackAlpha"
        variant="outline"
        borderRadius="1px"
        onClick={handleBad}
      >
        Bad
      </Button>
      <Button
        mr={2}
        colorScheme="blackAlpha"
        variant="outline"
        borderRadius="1px"
        onClick={handleReset}
      >
        Reset
      </Button>
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
    </div>
  );
};

export default Unicafe;
