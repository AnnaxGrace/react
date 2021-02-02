import React from 'react';

import Button from "react-bootstrap/Button";


function DeleteBtn({value, deleteNote}) {
    return (
        <>
           <Button id="delete-btn" value={value} onClick={deleteNote} variant="danger">Delete</Button>
        </>
    )
}

export default DeleteBtn;

