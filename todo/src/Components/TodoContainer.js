import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Todo from "./Todo";
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
  const [showGifs, setShowGifs] = useState({
    showTrash: false,
    showPencil: false,
  });

  const addNote = (event) => {
    event.preventDefault();
    showAnimation("showPencil");
    todos.push(newTodo);
    setNewTodo("");
  };

  const deleteNote = (event) => {
    const { value } = event.target;
    const newTodoArray = todos.filter((todo) => todo !== value);
    setTodos(newTodoArray);
  };

  const clearNotes = () => {
    showAnimation("showTrash");
    setTodos([]);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNewTodo(value);
  };

  const showAnimation = (animation) => {
    setShowGifs({ ...showGifs, [animation]: true });
    setInterval(function () {
      setShowGifs({ ...showGifs, [animation]: false });
    }, 3000);
  };

  return (
      <Container className="note">
        <Row>
          <Col className="add-title">
            <h2>Add an item!</h2>
          </Col>
        </Row>
        <AddTodoForm
          newTodo={newTodo}
          addNote={addNote}
          clearNotes={clearNotes}
          handleInputChange={handleInputChange}
          showGifs={showGifs}
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
