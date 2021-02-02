import React from "react";
import DeleteBtn from "./DeleteBtn";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function Todo({item, deleteNote}) {
  return (
    <>
      <li>
        <Row>
        <input type="checkbox" />
          <Col><strong>{item}</strong></Col>
          <Col>
            <DeleteBtn deleteNote={deleteNote} value={item} />
          </Col>
        </Row>
      </li>
    </>
  );
}

export default Todo;
