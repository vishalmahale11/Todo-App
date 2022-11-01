import { Box, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import AddItem from "./AddItem";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todo, setTodo] = useState([]);

  const handleToggle = (id) => {
    const updateStatus = todo.map((el) => {
      return el.id === id ? { ...el, status: !el.status } : el;
    });
    setTodo(updateStatus);
  };

  const handleDelete = (id) => {
    const updateArr = todo.filter((el) => {
      return el.id !== id;
    });
    setTodo(updateArr);
  };

  const handleAdd = (text) => {
    const newItem = {
      id: todo.length + Date.now(),
      title: text,
      status: false,
    };
    setTodo([...todo, newItem]);
  };

  return (
    <Box>
      <AddItem handleAdd={handleAdd} />
      <Box
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          width: "60%",
          marginTop: "20px",
          marginLeft: "300px",
          padding: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UnorderedList>
          {todo.map((item) => (
            <TodoItem
              key={item.id}
              title={item.title}
              status={item.status}
              handleToggle={() => handleToggle(item.id)}
              handleDelete={() => handleDelete(item.id)}
            />
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Todo;
