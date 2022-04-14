import React from "react";
import { useState, useRef, useEffect } from "react";
import { Button, Dropdown, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import "./ChatMessages.css";
import ImageModal from "../uploadImage/ImageModal";

export default function ChatMessages(props) {
    const containerRef = useRef(null);

    const [input, setInput] = useState('');
    const [chat_messages, setItems] = React.useState([{ from: "me", message: "Hey, whats up?", type: "text" },
    { from: "not", message: "Hey, have you seen the news?", type: "text" },
    { from: "me", message: "What's the news?", type: "text" },
    { from: "not", message: "Do you come to b-day party tonight?", type: "text" },
    { from: "me", message: "Yes, sure!", type: "text" },
    { from: "not", message: "Cool, see you!", type: "text" },
    { from: "not", message: "Don't forget to bring the present!", type: "text" }])

    /* for images */
    const [type, setType] = useState('');
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    // const handleSetImage = (e) => setInput(e);
    const handleCloseImageModal = () => setShow(false);
    const handleShowImageModal = () => setShow(true);

    useEffect(() => {

        if (containerRef && containerRef.current) {
            const element = containerRef.current;
            element.scroll({
                top: element.scrollHeight,
                left: 0,
                behavior: "smooth"
            })
        }

    }, [containerRef, chat_messages])

    const showItem = () => {
        if (input === '') return;
        setItems([...chat_messages, { from: "me", message: input }])
        setInput('');
    }

    const showImage = () => {
        handleCloseImageModal();
        // console.log(selectedImage);
        // let newImage = { from: "me", message: URL.createObjectURL(selectedImage), type: "image" };
        // console.log(selectedImage);
        // if(selectedImage == File) {setType('image');
        // console.log(newImage);}
        setItems([...chat_messages, { from: "me", message: URL.createObjectURL(selectedImage), type: "image" }]);
        console.log(selectedImage);
        setSelectedImage(null);
    }

    const enterKey = (e) => {
        if (e.which === 13) showItem();
    }

    const messagesList = chat_messages.map((contact, key) => {
        if (contact.from === "me") {
            return (
                <div className="row">
                    <div className="col-md-3 offset-md-9">
                        <div className="chat-bubble chat-bubble--right">
                        {(() => {
                            if (contact.type==="image") {
                              return (
                                <div><img alt="not found" width={"200px"} src={contact.message} />
                                <span className="time text-muted small">00:01</span></div>
                              )
                            } else {
                              return (
                                <div><p className="text-muted">{contact.message}</p>
                                <span className="time text-muted small">00:01</span></div>
                              )
                            }
                          })()}
                            
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (

                <div className="row">
                    <div className="col-md-3">
                        <div className="chat-bubble chat-bubble--left">
                            <p className="text-muted">{contact.message}</p>
                            <span className="time text-muted small">00:01</span>
                        </div>
                    </div>
                </div>


            )
        }
    });

    return (
        <div className="help-div">
            <div className="current-contact">
                <img className="profile-image" src={props.img} alt="icon"></img>
                <span className="text">
                    <h6 className="contact-name">{props.name}</h6>
                    <p className="text-muted quote">Throw kindness around like confetti</p>
                </span>
            </div>


            <div className="chat-panel" ref={containerRef}>
                {messagesList}
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="new-message-panel">

                        <InputGroup >
                            <Dropdown drop="up">
                                <Dropdown.Toggle className="dropdown-button">
                                    <i className="bi bi-paperclip "></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="animate slideIn">
                                    <Dropdown.Item className="item-1" 
                                        onClick={handleShowImageModal}>
                                        <img className="image-icon" src="./images/image.png" alt="image" />
                                    </Dropdown.Item>
                                    <Dropdown.Item className="item-2">
                                        <img className="image-icon" src="./images/movie.png" alt="image" />
                                    </Dropdown.Item>
                                    <Dropdown.Item className="item-3">
                                        <img className="image-icon" src="./images/voice.png" alt="image" />
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Form.Control value={input} className="input-message" type={'text'} placeholder={'Write a message'}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={enterKey}>
                            </Form.Control>
                            {/*<h1><UploadAndDisplayImage /></h1>*/}
                            <Button className="send-message" onClick={showItem}>
                                <i className="bi bi-send float-end"></i>
                            </Button>



                            {/** IMAGE MODAL PART START */}
                            {/*<ImageModal show={show} onHide={handleCloseImageModal} />*/}
                            <Modal show={show} onHide={handleCloseImageModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    Upload an image from your computer
                                    {selectedImage && (
                                        <div>
                                            <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                                            <br />
                                        </div>
                                    )}
                                    <br />

                                    <br />
                                    <input type="file"
                                        name="myImage"
                                        onChange={(event) => {
                                            setSelectedImage(event.target.files[0]);
                                            console.log(event.target.files[0]);
                                        }} />

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseImageModal}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={showImage}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            {/** IMAGE MODAL PART END */}



                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}