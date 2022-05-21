import { ListItem } from "@chakra-ui/react";

const Topic = ({ parts }) => (
  <ListItem>{`${parts.name} ${parts.exercises}`}</ListItem>
);

export default Topic;
