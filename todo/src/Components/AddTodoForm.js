import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function AddTodoForm(props) {
  console.log(props);

  return (
    <Row>
      <Col className="add-form">
        <Form>
          <Form.Group controlId="formAddNote">
            <Form.Control
              as="textarea"
              value={props.newTodo}
              onChange={props.handleInputChange}
              placeholder="What do you need to do today?"
            />
            <Form.Text className="text-muted">
              ex. Clean my room, Call Mom
            </Form.Text>
          </Form.Group>
          <Row>
            <Button
              className="add-btn"
              variant="primary"
              onClick={props.addNote}
            >
              Add
            </Button>
            <Button
              className="clear-btn"
              variant="danger"
              onClick={props.clearNotes}
            >
              Clear all items
            </Button>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default AddTodoForm;
