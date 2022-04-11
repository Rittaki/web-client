import { useEffect, useState } from 'react';
import './Chat.css';
import { Modal, Button } from 'react-bootstrap';
import AddNewContact from './addContact/AddNewContact';
import ChatMessages from './chatMessages/ChatMessages';
 import { userList } from '../Login';

function Chat() {
    const contact_chat = [{ name: "Daniel", message: "Hey, have you seen the news?", image: "./images/cat1.png" },
    { name: "Moshe", message: "Hey, have you seen the news?", image: "./images/cat2.png" },
    { name: "Sara", message: "Hey, have you seen the news?", image: "./images/cat3.png" },
    { name: "Alice", message: "Hi! Do you come to my b-day party tonight?", image: "./images/cat4.png" },
    { name: "Bob", message: "Hey, have you seen the news?", image: "./images/cat7.png" },
    { name: "eden", message: "Hey, have you seen the news?", image: "./images/cat7.png" }];
    const [selectedContact, SetSelectedContact] = useState("");
    const [selectedImg, SetSelectedImg] = useState("");
    const[search, setSearch]=useState("");
    const [newContact, setNewContact] = useState("");
    const[inDatabase, setInDatabase] = useState(false);
    const[isContact, setIsContact] = useState(false);
    const[newContactError,setNewContactError]=useState("");
    const [show, setShow] = useState(false);
    const[addContactSubmit,setAddContactSubmit]=useState(false);




    const filteredData = contact_chat.filter((contact) => {
        if (search === '') {
            return contact;
        }
        else if(contact.name.toLowerCase().includes(search.toLowerCase())){
            return contact;
        }
    })

    const handleClick = (userName, img) => {
        SetSelectedContact(userName);
        SetSelectedImg(img);
    }

    const chatList = filteredData.map((contact, key) => {
        return (
            <div className="contacts-map">
                <div className={(selectedContact === contact.name) ? "selected-contact" : "contacts"}
                    onClick={() => handleClick(contact.name, contact.image)}>
                    <img className={(selectedContact === contact.name) ? "selected-contacts-image" : "contacts-image"}
                        src={contact.image} alt="icon"></img>
                    <div className={(selectedContact === contact.name) ? "selected-message" : "message"}>
                        <h6 className={(selectedContact === contact.name) ? "selected-contact-name" : "contact-name"}>{contact.name}</h6>
                        <p className={(selectedContact === contact.name) ? "selected-text-muted" : "text-muted"}>{contact.message}</p>
                    </div>
                    <span className="time-text-muted-small">1 minute ago</span>
                </div>
                <hr />
            </div>
        )
    });

    let modelStyle = {
        padding: '10%',
        display: 'block',
    }

    const handleShow = () => setShow(true);
    const handleClose = ()=> {
        setShow(false);
        setNewContact("");
        setInDatabase(false);
        setIsContact(false);
        setNewContactError("");
    } ;

    const handleAddContact=()=>{
        setAddContactSubmit(true);
        setInDatabase(false);
        setIsContact(false);
        if(newContact===""){
            setNewContactError("new contact username is required");
        }
        //change to login username.......
        else if(newContact==="Rita"){
            setNewContactError("can't add yourself as contact");
        }
        else{
            userList.map((item)=>compareUserList(item));
            contact_chat.map((item)=>compareContacts(item))
        }
    }

    useEffect(()=>{
        if(addContactSubmit && !inDatabase){
            setNewContactError("can't find user");
            
        }
        else if(addContactSubmit && isContact){
                setNewContactError("user is already contact");
        }
        else if(addContactSubmit && isContact && inDatabase){
            setNewContactError("add");
        }
    },[inDatabase,isContact]);


    function compareUserList(item){
        if(item.userName===newContact){
            setInDatabase(true);
        }
    }
    function compareContacts(item){
        if(item.name===newContact){
            setIsContact(true);
        }
    }
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
                            <input type="text" placeholder="Search chat" onChange={(e)=>setSearch(e.target.value)}/>
                        </div>
                    </div>
                    <div className='contacts-container'>
                        {chatList}
                    </div>

                </div>

                <Modal show={show} style={modelStyle} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Add new contact
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewContact setNewContact={setNewContact} />
                        <div className='error'>{newContactError}</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleAddContact}>
                            Add Contact
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className="col-md-7 chat-colomn" >

                    {(selectedContact) ? (<ChatMessages name={selectedContact} img={selectedImg} />)
                        : <div className="select-text">Select a chat to start messaging</div>}
                </div>
            </div>
        </div>

    );
}

export default Chat;