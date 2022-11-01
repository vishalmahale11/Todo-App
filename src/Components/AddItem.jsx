import { Box, Button, Input } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const AddItem = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    if (text.trim().length !== 0) {
      setText("");
      return handleAdd(text);
    } else {
      alert("Please add Todo");
    }
  };
  return (
    <Box>
      <Input
        htmlSize={40}
        mt={100}
        width="auto"
        onChange={handleChange}
        value={text}
        type="text"
        placeholder="Add TODO"
      />
      <Button mt={-2} ml={5} colorScheme="blue" onClick={onClick}>
        Add
      </Button>
    </Box>
  );
};

export default AddItem;
