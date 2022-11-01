import { Box, Button, Spacer } from "@chakra-ui/react";
import React from "react";
import Timer from "./Timer";

const TodoItem = ({ title, status, handleToggle, handleDelete }) => {
  return (
    <>
      <Box m={10}>
        <Box style={{ fontSize: "30px", fontWeight: "bold" }}>
          {title} -
          {status ? (
            <Box style={{ color: "green"}}>Completed</Box>
          ) : (
            <Box style={{ color: "red"}}>Not Completed</Box>
          )}
        </Box>
        <Spacer></Spacer>
        <Button ml={30} onClick={handleToggle}>
          Toggle
        </Button>
        <Button colorScheme="red" ml={30} onClick={handleDelete}>
          Delete
        </Button>
        <Box mt={3} style={{ fontSize: "30px" }}>
          Time Remaining :- <Timer />
        </Box>
      </Box>
    </>
  );
};

export default TodoItem;
