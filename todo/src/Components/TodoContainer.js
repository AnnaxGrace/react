import React, { useState } from "react";

import Todo from "./Todo";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Notepad from "./assets/notepad.png";

import "./assets/css/container.css";

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

  const deleteNote = (event) => {
      const { value } = event.target
      console.log(value)
  }

  const handleInputChange = event => {
    const { value } = event.target;
    setNewTodo(value);
  };

  return (
    <Container className="note">
      <Row>
        <Col className="add-title">Add an item!</Col>
      </Row>
      <Row>
        <Col className="add-form">
          <Form>
            <Form.Group controlId="formAddNote">
              <Form.Control
                as="textarea"
                value={newTodo}
                onChange={handleInputChange}
                placeholder="What do you need to do today?"
              />
              <Form.Text className="text-muted">
                ex. Clean my room, Call Mom
              </Form.Text>
            </Form.Group>

            <Button className="add-btn" variant="primary" onClick={addNote}>
              Add
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="todo-row">
        <ul>
          {todos.map((t, i) => (
            <Todo key={i} item={t} deleteNote={deleteNote}/>
          ))}
        </ul>
      </Row>
    </Container>
  );
}

export default TodoContainer;
