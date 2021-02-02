import React from "react";
import TrashCanGif from "./assets/trashcangif1.gif"
import PencilGif from "./assets/pencilGif.gif"

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddTodoForm({newTodo, addNote, clearNotes, handleInputChange, showGifs}) {

  return (
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
          <Row>
            <Button
              className="add-btn"
              variant="primary"
              onClick={addNote}
            >
              {showGifs.showPencil ? <img src={PencilGif} width="55" height="55" alt="writing pencil animation"/> : "Add" }
            </Button>
            <Button
              className="clear-btn"
              variant="danger"
              onClick={clearNotes}
            >
              {showGifs.showTrash ? <img src={TrashCanGif} width="50" height="50" alt="opening trash can animation"/> : "Clear List"}
            </Button>
          </Row>
          
        </Form>
      </Col>
    </Row>
  );
}

export default AddTodoForm;
