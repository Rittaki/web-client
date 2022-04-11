import { Form } from "react-bootstrap";
import React from 'react';


const AddNewContact = (props) => {
    return (
        <Form>
            <Form.Group>
                <Form.Control type="text" placeholder="Enter Username" onChange={(e)=>props.setNewContact(e.target.value)} />
            </Form.Group>
        </Form>
    );
}

export default AddNewContact;