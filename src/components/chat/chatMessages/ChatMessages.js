import React from "react";
import { useState, useRef, useEffect } from "react";
import { Button, Dropdown, Form, InputGroup} from "react-bootstrap";
import "./ChatMessages.css";
import ImageModal from "../uploadImage/ImageModal";
import VideoModal from "../uploadImage/VideoModal";

export default function ChatMessages(props) {
    const containerRef = useRef(null);

    const [input, setInput] = useState('');
    const [chat_messages, setItems] = React.useState([{ from: "me", message: "Hey, whats up?",time:"12:07", type: "text" },
    { from: "not", message: "Hey, have you seen the news?",time:"12:07", type: "text" },
    { from: "me", message: "What's the news?",time:"12:07", type: "text" },
    { from: "not", message: "Do you come to b-day party tonight?",time:"12:07", type: "text" },
    { from: "me", message: "Yes, sure!",time:"12:07", type: "text" },
    { from: "not", message: "Cool, see you!",time:"12:07", type: "text" },
    { from: "not", message: "Don't forget to bring the present!",time:"12:07", type: "text" }])

    /* for images */
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const handleCloseImageModal = () => setShow(false);
    const handleShowImageModal = () => setShow(true);

    /* for video */
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const handleCloseVideoModal = () => setShowVideoModal(false);
    const handleShowVideoModal = () => setShowVideoModal(true);


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
        var today = new Date();
        const messageTime = today.getHours() + ':' + today.getMinutes();
        setItems([...chat_messages, { from: "me",time:messageTime, message: input }])
        if(input.length>45){
            props.setLastMessage(input.slice(0, 45).concat("..."));
        }
        else{
            props.setLastMessage(input)
        }
        setInput('');
    }

    const showImage = () => {
        handleCloseImageModal();
        var today = new Date();
        const messageTime = today.getHours() + ':' + today.getMinutes();
        setItems([...chat_messages, { from: "me", message: URL.createObjectURL(selectedImage),time:messageTime, type: "image" }]);
        delete today();
        props.setLastMessage("Image")
        setSelectedImage(null);
    }

    const showVideoFunc = () => {
        handleCloseVideoModal();
        var today = new Date();
        const messageTime = today.getHours() + ':' + today.getMinutes();
        setItems([...chat_messages, { from: "me", message: URL.createObjectURL(selectedVideo),time:messageTime, type: "video" }]);
        props.setLastMessage("Video")
        setSelectedVideo(null);
    }

    const enterKey = (e) => {
        if (e.which === 13) showItem();
    }

    const messagesList = chat_messages.map((contact, key) => {
        if (contact.from === "me") {
            return (
                <div className="row">
                    <div className="col-md-3 offset-md-9">

                        {(() => {
                            if (contact.type === "image") {
                                return (
                                    <div className="chat-bubble chat-bubble--right"><img alt="not found" width={"200px"} src={contact.message} />
                                        <span className="time text-muted small">{contact.time}</span></div>
                                )
                            } else if (contact.type === "video") {
                                return (
                                    <div className="chat-bubble chat-bubble--right">
                                        <video width={"400px"} controls>
                                            <source src={contact.message} type="video/mp4" />
                                        </video>
                                        <span className="time text-muted small">{contact.time}</span></div>
                                )
                            }

                            else {
                                return (
                                    <div className="chat-bubble chat-bubble--right"><p className="text-muted">{contact.message}</p>
                                        <span className="time text-muted small">{contact.time}</span></div>
                                )
                            }
                        })()}

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
                            <span className="time text-muted small">{contact.time}</span>
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
                    <h6 className="contact-name">{props.nickname}</h6>
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
                                    <Dropdown.Item className="item-2"
                                        onClick={handleShowVideoModal}>
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
                            <Button className="send-message" onClick={showItem}>
                                <i className="bi bi-send float-end"></i>
                            </Button>

                            <ImageModal show={show} onHide={handleCloseImageModal} image={selectedImage}
                                showImage={showImage} setImage={setSelectedImage} />
                            
                            <VideoModal show={showVideoModal} onHide={handleCloseVideoModal} video={selectedVideo}
                                showVideo={showVideoFunc} setVideo={setSelectedVideo} />

                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}
