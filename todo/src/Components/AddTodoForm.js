import React, { useState } from "react";
import TrashCanGif from "./assets/trashcangif1.gif"
import PencilGif from "./assets/pencilGif.gif"

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function AddTodoForm(props) {
  const [showGifs, setShowGifs] = useState(false);
  console.log(props)

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
              {props.showGifs.showPencil ? <img src={PencilGif} width="55" height="55"/> : "Add" }
              {/* Add */}
              {/* <img src={PencilGif} width="55" height="55"/> */}

            </Button>
            <Button
              className="clear-btn"
              variant="danger"
              onClick={props.clearNotes}
            >
              {/* Clear list */}
              <img src={TrashCanGif} width="50" height="50"/> 
            </Button>
            {/* <img src={TrashCanGif} width="20" height="20"/>            
            <img src={PencilGif} width="5" height="5"/> */}
          </Row>
          
        </Form>
      </Col>
    </Row>
  );
}

export default AddTodoForm;
