import React from "react";
import { Modal, Button } from 'react-bootstrap';

export default function ImageModal(props) {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Add image</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                Upload an image from your computer
                {props.image && (
                    <div>
                        <img alt="not found" width={"250px"} src={URL.createObjectURL(props.image)} />
                        <br />
                    </div>
                )}
                <br />
                <br />
                <input type="file"
                    name="myImage"
                    onChange={(event) => {
                        props.setImage(event.target.files[0]);
                        console.log(event.target.files[0]);
                    }} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.showImage}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}