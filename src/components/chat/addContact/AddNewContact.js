import { Form } from "react-bootstrap";
import React from 'react';

const AddNewContact = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Control type="text" placeholder="Nickname" required />
            </Form.Group>
        </Form>
    );
}

export default AddNewContact;