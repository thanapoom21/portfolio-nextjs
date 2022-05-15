import { useState } from "react";
import { Button } from "@chakra-ui/react";

const ComplexState = () => {
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
    <div>
      {`Left button was clicked ${clicks.left} times.`}
      <Button
        m={10}
        colorScheme="blackAlpha"
        variant="outline"
        borderRadius="1px"
        onClick={handleLeftClick}
      >
        Left
      </Button>
      <Button
        colorScheme="blackAlpha"
        variant="outline"
        borderRadius="1px"
        onClick={handleReset}
      >
        Reset
      </Button>
      <Button
        m={10}
        colorScheme="blackAlpha"
        variant="outline"
        borderRadius="1px"
        onClick={handleRightClick}
      >
        Right
      </Button>
      {`Right button was clicked ${clicks.right} times.`}
    </div>
  );
};

export default ComplexState;
