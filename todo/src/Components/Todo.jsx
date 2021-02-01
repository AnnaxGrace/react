import React from "react";
import DeleteBtn from "./DeleteBtn";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function Todo(props) {
  return (
    <>
      <li>
        <Row>
          <Col>{props.item}</Col>
          <Col>
            <DeleteBtn deleteNote={props.deleteNote} value={props.item} />
          </Col>
        </Row>
      </li>
    </>
  );
}

export default Todo;
