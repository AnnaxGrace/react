import React from "react";
import TrashCanGif from "./assets/trashcangif1.gif"

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
            <iframe src="https://giphy.com/embed/KE52mSdaYgGMWq67jo" width="50" height="50" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/transparent-haveaniceday-steffilynn-KE52mSdaYgGMWq67jo"></a></p>
            <img src={TrashCanGif} width="50" height="50"/>
          </Row>
          
        </Form>
      </Col>
    </Row>
  );
}

export default AddTodoForm;
