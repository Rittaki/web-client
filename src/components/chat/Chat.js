import { useState } from 'react';
import './Chat.css';
import { Modal, Button } from 'react-bootstrap';
import AddNewContact from './addContact/AddNewContact';

function Chat() {
    const contact_chat = [{ name: "Daniel", message: "Hey, have you seen the news?", image: "./images/cat1.png" },
    { name: "Moshe", message: "Hey, have you seen the news?", image: "./images/cat2.png" },
    { name: "Sara", message: "Hey, have you seen the news?", image: "./images/cat3.png" },
    { name: "Alice", message: "Hi! Do you come to my b-day party tonight?", image: "./images/cat4.png" },
    { name: "Bob", message: "Hey, have you seen the news?", image: "./images/cat7.png" }];

    const chatList = contact_chat.map((contact, key) => {
        return (
            <div className="contacts-map">
                <div className="contacts">
                    <img className="contacts-image" src={contact.image} alt="icon"></img>
                    <div className="message">
                        <h6 className="contact-name">{contact.name}</h6>
                        <p className="text-muted">{contact.message}</p>
                    </div>
                    <span className="time text-muted small">1 minute ago</span>
                </div>
                <hr />
            </div>
        )
    });

    let modelStyle = {
        padding: '10%',
        display: 'block',
    }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="container-fluid chat">
            <div className="row chat">

                <div className="col-md-5 contacts-colomn">
                    <div className="profile-panel">
                        <img className="profile-image" src="./images/cat.png" alt="icon"></img>
                        <span className="profile-name">Rita</span>
                        <span className="add-contact" onClick={handleShow}>
                            <i className="bi bi-person-plus float-end"></i>
                        </span>
                    </div>
                    <div className="search-box">
                        <div className="input-wrapper">
                            <i className="bi bi-search"></i>
                            <input type="text" placeholder="Search chat"></input>
                        </div>
                    </div>
                    {chatList}
                </div>

                <Modal show={show} style={modelStyle} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Add new contact
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewContact />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Add Contact
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className="col-md-7 chat-colomn" >
                    <div className="select-text">Select a chat to start messaging</div>
                    {/*<div className="current-contact">
                        <img className="profile-image" src="./images/cat4.png" alt="icon"></img>
                        <div className="text">
                            <h6 className="contact-name">Alice</h6>
                            <p className="text-muted quote">Throw kindness around like confetti</p>
                        </div>     
                    </div>*/}
                </div>
            </div>
        </div>

    );
}

export default Chat;