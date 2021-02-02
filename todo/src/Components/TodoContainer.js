import React, { useState } from "react";

import Todo from "./Todo";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import "./assets/css/container.css";
import AddTodoForm from "./AddTodoForm";

function TodoContainer() {
  const [todos, setTodos] = useState([
    "eat",
    "sleep",
    "code",
    "pray",
    "repeat",
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addNote = event => {
    event.preventDefault();
    todos.push(newTodo);
    setNewTodo("");
  };

  const deleteNote = event => {
    const { value } = event.target;
    const newTodoArray = todos.filter((todo) => todo !== value);
    setTodos(newTodoArray);
  };

  const clearNotes = () => {
    setTodos([]);
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setNewTodo(value);
  };

  return (
    <Container className="note">
      <Row>
        <Col className="add-title"><h2>Add an item!</h2></Col>
      </Row>
      <AddTodoForm
        newTodo={newTodo}
        addNote={addNote}
        clearNotes={clearNotes}
        handleInputChange={handleInputChange}
      />
      <Row className="todo-row">
        <ul>
          {todos.map((t, i) => (
            <Todo key={i} item={t} deleteNote={deleteNote} />
          ))}
        </ul>
      </Row>
    </Container>
  );
}

export default TodoContainer;
