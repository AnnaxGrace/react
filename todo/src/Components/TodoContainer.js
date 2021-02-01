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
// {props.item}

function TodoContainer() {
  const [todos, setTodos] = useState([
    "eat",
    "sleep",
    "code",
    "pray",
    "repeat",
  ]);

  return (
    <Container className="note">

    </Container>
  );
}

export default TodoContainer;
