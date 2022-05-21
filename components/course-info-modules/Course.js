import Topic from "./Topic";
import TotalOfExercises from "./TotalOfExercises";
import { Box, OrderedList } from "@chakra-ui/react";

const Course = ({ courses }) => {
  return (
    <>
      <Box my={2}>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tighter">
          Web Development Curriculum
        </h1>
      </Box>
      {courses.map(({ name, parts }, idx) => {
        const totalOfExercises = parts
          .map(part => part.exercises)
          .reduce((a, c) => a + c);

        return (
          <div key={idx}>
            <p className="text-lg md:text-lg font-bold tracking-tight">
              {name}
            </p>
            <OrderedList>
              {parts.map((part, idx) => (
                <Topic key={idx} parts={part} />
              ))}
            </OrderedList>
            <TotalOfExercises totalOfExercises={totalOfExercises} />
          </div>
        );
      })}
    </>
  );
};

export default Course;
