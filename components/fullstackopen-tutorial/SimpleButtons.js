import { useState } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";

const ClickButtons = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    };

    setClicks(newClicks);
  };

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };

    setClicks(newClicks);
  };

  const handleReset = () => {
    setClicks({
      left: 0,
      right: 0,
    });
  };

  return (
    <>
      <Box my={2}>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tighter">
          Click the button you like the most.
        </h1>
      </Box>
      {`Left button was clicked ${clicks.left} times.`}
      <HStack my={2} spacing="24px">
        <Button onClick={handleLeftClick}>Left</Button>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleRightClick}>Right</Button>
      </HStack>
      {`Right button was clicked ${clicks.right} times.`}
    </>
  );
};

export default ClickButtons;
