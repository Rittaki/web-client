import React from "react";
import { Modal, Button } from 'react-bootstrap';

export default function VideoModal(props) {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Add video</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Upload a video from your computer
                {props.video && (
                    <div>
                        <video width={"400px"} controls>
                            <source src={URL.createObjectURL(props.video)} type="video/mp4" />
                        </video>
                        <br />
                    </div>
                )}
                <br />
                <br />
                <input type="file"
                    name="myVideo"
                    onChange={(event) => {
                        props.setVideo(event.target.files[0]);
                        console.log(event.target.files[0]);
                    }} />

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.showVideo}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}