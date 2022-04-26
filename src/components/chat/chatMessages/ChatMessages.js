import React from "react";
import { useState, useRef, useEffect } from "react";
import { Button, Dropdown, Form, InputGroup } from "react-bootstrap";
import "./ChatMessages.css";
import ImageModal from "../uploadModals/ImageModal";
import VideoModal from "../uploadModals/VideoModal";
import RecordingModal from "../uploadModals/RecordingModal";
import AudioModal from "../uploadModals/AudioModal";

export default function ChatMessages(props) {
    const [load, setLoad] = useState(false);
    const containerRef = useRef(null);
    const [input, setInput] = useState('');
    //hardcoded array of all the messages 
    const allMessages = [{
        name: (props.logInUserName === "Rita") ? "Daniel" : "Rita", messages: [
            { from: "not", message: "Do you come to b-day party tonight?", time: "12:07", type: "text" },
            { from: "me", message: "./images/birthday.png", time: "12:07", type: "image" },
            { from: "me", message: "Yes, sure!", time: "12:07", type: "text" },
            { from: "me", message: "./records/birthday.mp3", time: "12:08", type: "record" },
            { from: "not", message: "Don't forget to bring the present!", time: "12:08", type: "text" }]
    },
    {
        name: (props.logInUserName === "Moshe") ? "Daniel" : "Moshe", messages: [
            { from: "not", message: "Hey you want to catch the new Spiderman movie?", time: "14:09", type: "text" },
            { from: "me", message: "for sure", time: "14:35", type: "text" },
            { from: "me", message: "./videos/video1.mp4", time: "08:07", type: "video" },
            { from: "me", message: "i've waited months to see it!", time: "14:35", type: "text" }]
    },
    {
        name: (props.logInUserName === "Sara") ? "Daniel" : "Sara", messages: [
            { from: "not", message: "Hey, wanna meet up? ", time: "17:09", type: "text" },
            { from: "me", message: "I can't", time: "18:09", type: "text" },
            { from: "me", message: "./records/song.mp3", time: "18:09", type: "record" },
            { from: "me", message: "I have to do homework in Advanced Programming 2", time: "18:10", type: "text" }]
    },
    {
        name: (props.logInUserName === "Alice") ? "Daniel" : "Alice", messages: [
            { from: "not", message: "Why did you blocked me in instagram? ", time: "00:09", type: "text" },
            { from: "not", message: "i'm waiting for an answer", time: "03:09", type: "text" },
            { from: "me", message: "./videos/video2.mp4", time: "12:07", type: "video" },
            { from: "me", message: "stop texting me", time: "07:09", type: "text" }]
    },

    {
        name: (props.logInUserName === "Bob") ? "Daniel" : "Bob", messages: [
            { from: "not", message: "Hey, are you doing something this passover? ", time: "14:19", type: "text" },
            { from: "me", message: "I will go on vacation", time: "14:29", type: "text" },
            { from: "me", message: "./images/cool.png", time: "14:29", type: "image" },
            { from: "me", message: "i heard there are some new flights to Sinai", time: "14:29", type: "text" }]
    }]
    //for showing messages
    const [chat_messages, setItems] = useState((props.newSign) ? [] : allMessages);
    const [currentMessages, setCurrentMessages] = useState([]);
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
    /* for record */
    const [showRecordModal, setShowRecordModal] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const handleCloseRecordModal = () => setShowRecordModal(false);
    const handleShowRecordModal = () => setShowRecordModal(true);
    /* for audio messages */
    const [showAudioModal, setShowAudioModal] = useState(false);
    const [selectedAudio, setSelectedAudio] = useState(null);
    const handleCloseAudioModal = () => setShowAudioModal(false);
    const handleShowAudioModal = () => setShowAudioModal(true);

    //filters the correct messages with current contact
    const elementFromChat_messages = chat_messages.filter((item) => {
        if (item.name === props.contactUserName) {
            return item;
        }
    }).map((filteredElement => (
        filteredElement.messages)
    ));

    //for scrolling to the bottom of chat panel
    useEffect(() => {
        if (containerRef && containerRef.current) {
            const element = containerRef.current;
            console.log(element)
            element.scroll({
                top: element.scrollHeight,
                left: 0,
                behavior: "smooth",
            })
            setLoad(false)
        }

    }, [containerRef, chat_messages, currentMessages, load])

    //changes the shown messages every time different contact is chosen
    useEffect(() => {
        if (elementFromChat_messages.length != 0) {
            setCurrentMessages(elementFromChat_messages[0]);
        }
        else {
            setCurrentMessages([]);
            setItems([...chat_messages, { name: props.contactUserName, messages: [] }]);
        }
    }, [props.contactUserName])



    //shows the time of sending messages
    const showItem = () => {
        if (input === '') return;
        var today = new Date();
        const messageTime = today.getHours() + ':' + today.getMinutes();
        chat_messages.map((contact) => {
            if (props.contactUserName === contact.name) {
                setCurrentMessages([...currentMessages, { from: "me", time: messageTime, message: input, type: "text" }])
                contact.messages.push({ from: "me", time: messageTime, message: input, type: "text" })
            }
        })
        props.setLastMessage(input)
        setInput('');
    }

    //for adding images
    const showImage = () => {
        handleCloseImageModal();
        var today = new Date();
        const messageTime = today.getHours() + ':' + today.getMinutes();
        chat_messages.map((contact) => {
            if (props.contactUserName === contact.name) {
                setCurrentMessages([...currentMessages, { from: "me", time: messageTime, message: URL.createObjectURL(selectedImage), type: "image" }])
                contact.messages.push({ from: "me", message: URL.createObjectURL(selectedImage), time: messageTime, type: "image" })
            }
        })
        props.setLastMessage("Image")
        setSelectedImage(null);
    }

    //for adding videos
    const showVideoFunc = () => {
        handleCloseVideoModal();
        var today = new Date();
        const messageTime = today.getHours() + ':' + today.getMinutes();
        chat_messages.map((contact) => {
            if (props.contactUserName === contact.name) {
                console.log(selectedVideo);
                setCurrentMessages([...currentMessages, { from: "me", message: URL.createObjectURL(selectedVideo), time: messageTime, type: "video" }])
                contact.messages.push({ from: "me", message: URL.createObjectURL(selectedVideo), time: messageTime, type: "video" })
            }
        })
        props.setLastMessage("Video")
        setSelectedVideo(null);
    }

    //for adding records
    const showRecordFunc = () => {
        handleCloseRecordModal();
        var today = new Date();
        const messageTime = today.getHours() + ':' + today.getMinutes();
        chat_messages.map((contact) => {
            if (props.contactUserName === contact.name) {
                console.log(selectedRecord);
                setCurrentMessages([...currentMessages, { from: "me", message: selectedRecord, time: messageTime, type: "record" }])
                contact.messages.push({ from: "me", message: selectedRecord, time: messageTime, type: "record" })
            }
        })
        props.setLastMessage("Record")
        setSelectedRecord(null);
    }

    //for adding audio
    const showAudioFunc = () => {
        handleCloseAudioModal();
        var today = new Date();
        const messageTime = today.getHours() + ':' + today.getMinutes();
        chat_messages.map((contact) => {
            if (props.contactUserName === contact.name) {
                console.log(selectedAudio);
                setCurrentMessages([...currentMessages, { from: "me", message: URL.createObjectURL(selectedAudio), time: messageTime, type: "record" }])
                contact.messages.push({ from: "me", message: URL.createObjectURL(selectedAudio), time: messageTime, type: "record" })
            }
        })
        props.setLastMessage("Audio")
        setSelectedAudio(null);
    }

    const enterKey = (e) => {
        if (e.which === 13) showItem();
    }

    //shows all the messages
    const messagesList = currentMessages.map((contact, key) => {
        if (contact.from === "me") {
            return (
                <div className="row">
                    <div className="col-md-3 offset-md-9">

                        {(() => {
                            if (contact.type === "image") {
                                return (
                                    <div className="chat-bubble chat-bubble--right"><img alt="not found" width={"200px"} src={contact.message} onLoad={() => setLoad(true)} />
                                        <span className="time text-muted small">{contact.time}</span></div>
                                )
                            } else if (contact.type === "video") {
                                return (
                                    <div className="chat-bubble chat-bubble--right">
                                        <video width={"400px"} controls onLoadedData={() => setLoad(true)} >
                                            <source src={contact.message} type="video/mp4" />
                                        </video>
                                        <span className="time text-muted small">{contact.time}</span>
                                    </div>
                                )
                            }
                            else if (contact.type === "record") {
                                return (
                                    <div className="chat-bubble chat-bubble--right">
                                        <audio controlsList="nodownload" controls onLoadedData={() => setLoad(true)}>
                                            <source src={contact.message} type="audio/mpeg" />
                                        </audio>


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
                                    <Dropdown.Item className="item-3"
                                        onClick={handleShowRecordModal}>
                                        <img className="image-icon" src="./images/voice.png" alt="image" />
                                    </Dropdown.Item>
                                    <Dropdown.Item className="item-4"
                                        onClick={handleShowAudioModal}>
                                        <img className="image-icon" src="./images/sound.png" alt="image" />
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

                            <RecordingModal show={showRecordModal} onHide={handleCloseRecordModal} record={selectedRecord}
                                showRecord={showRecordFunc} setRecord={setSelectedRecord} />

                            <AudioModal show={showAudioModal} onHide={handleCloseAudioModal} audio={selectedAudio}
                                showAudio={showAudioFunc} setAudio={setSelectedAudio} />
                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}