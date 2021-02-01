import React from 'react';

import Button from "react-bootstrap/Button";


function DeleteBtn(props) {
    return (
        <>
           <Button id="delete-btn" value={props.value} onClick={props.deleteNote}variant="danger">Delete</Button>
        </>
    )
}

export default DeleteBtn;

