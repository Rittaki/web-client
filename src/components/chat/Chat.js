import { useEffect, useState } from 'react';
import './Chat.css';
import { Modal, Button } from 'react-bootstrap';
import AddNewContact from './addContact/AddNewContact';
import ChatMessages from './chatMessages/ChatMessages';
 import { userList } from '../Login';

function Chat(props) {

    const contact_chat = [{user:"Rita",info:[{ name: "Daniel",nickName:"daniel", message: "Hey, have you seen the news?",time:58, image: "./images/cat1.png" },
    { name: "Moshe",nickName:"moshe", message: "Hey, have you seen the news?",time:63, image: "./images/cat3.png" },
    { name: "Sara",nickName:"sara", message: "Hey, have you seen the news?",time:128, image: "./images/cat4.png" },
    { name: "Alice",nickName:"alice", message: "Hi! Do you come to my b-day party tonight?",time:1200, image: "./images/cat5.png" },
    { name: "Bob",nickName:"bob", message: "Hey, have you seen the news?",time:2900, image: "./images/cat6.png" }]},
    {user:"Daniel",info:[{ name: "Rita",nickName:"rita", message: "Hey, have you seen the news?",time:1, image: "./images/cat2.png" },
    { name: "Moshe",nickName:"moshe", message: "Hey, have you seen the news?",time:2, image: "./images/cat3.png" },
    { name: "Sara",nickName:"sara", message: "Hey, have you seen the news?", time:3,image: "./images/cat4.png" },
    { name: "Alice",nickName:"alice", message: "Hi! Do you come to my b-day party tonight?",time:4, image: "./images/cat5.png" },
    ]},
    {user:"Moshe",info:[{ name: "Daniel",nickName:"daniel", message: "Hey, have you seen the news?",time:1, image: "./images/cat1.png" },
    { name: "Rita",nickName:"rita", message: "Hey, have you seen the news?",time:2, image: "./images/cat2.png" },
    { name: "Sara",nickName:"sara", message: "Hey, have you seen the news?",time:3, image: "./images/cat4.png" },
    { name: "Alice",nickName:"alice", message: "Hi! Do you come to my b-day party tonight?",time:4, image: "./images/cat5.png" },
    { name: "Bob",nickName:"bob", message: "Hey, have you seen the news?",time:5, image: "./images/cat6.png" }]},
    {user:"Sara",info:[{ name: "Daniel",nickName:"daniel", message: "Hey, have you seen the news?",time:1, image: "./images/cat1.png" },
    { name: "Moshe",nickName:"moshe", message: "Hey, have you seen the news?",time:2, image: "./images/cat3.png" },
    { name: "Rita",nickName:"rita", message: "Hey, have you seen the news?",time:3, image: "./images/cat2.png" },
    { name: "Alice",nickName:"alice", message: "Hi! Do you come to my b-day party tonight?",time:4, image: "./images/cat5.png" },
    { name: "Bob",nickName:"bob", message: "Hey, have you seen the news?",time:5, image: "./images/cat6.png" }]},
    {user:"Alice",info:[{ name: "Daniel",nickName:"daniel", message: "Hey, have you seen the news?",time:1, image: "./images/cat1.png" },
    { name: "Moshe",nickName:"moshe", message: "Hey, have you seen the news?",time:2, image: "./images/cat3.png" },
    { name: "Sara",nickName:"sara", message: "Hey, have you seen the news?",time:3, image: "./images/cat4.png" },
    { name: "Rita",nickName:"rita", message: "Hi! Do you come to my b-day party tonight?",time:4, image: "./images/cat2.png" },
    { name: "Bob",nickName:"bob", message: "Hey, have you seen the news?",time:5, image: "./images/cat6.png" }]},
    {user:"Bob",info:[{ name: "Daniel",nickName:"daniel", message: "Hey, have you seen the news?",time:1, image: "./images/cat1.png" },
    { name: "Moshe",nickName:"moshe", message: "Hey, have you seen the news?",time:2, image: "./images/cat3.png" },
    { name: "Sara",nickName:"sara", message: "Hey, have you seen the news?",time:3, image: "./images/cat4.png" },
    { name: "Alice",nickName:"alice", message: "Hi! Do you come to my b-day party tonight?",time:4, image: "./images/cat5.png" },
    { name: "Rita",nickName:"rita", message: "Hey, have you seen the news?",time:5, image: "./images/cat2.png" }]}
];
    const [selectedContact, SetSelectedContact] = useState({});
    const[search, setSearch]=useState("");
    const [newContact, setNewContact] = useState("");
    const[inDatabase, setInDatabase] = useState(false);
    const[isContact, setIsContact] = useState(false);
    const[newContactError,setNewContactError]=useState("");
    const [show, setShow] = useState(false);
    const[addContactSubmit,setAddContactSubmit]=useState(false);
    const[currnetContact, setCurrentContact]=useState({});
    const [lastMessage,setLastMessage]=useState("");
    const [minutes,setMinutes]=useState(0);


    const elementFromContactChat=contact_chat.filter((item)=>{
        if(item.user===props.user.userName){
            return item;
        }
    }).map((filteredElement=>(
        filteredElement.info)
    ));
    
    
    const[array,setArray]=useState((elementFromContactChat.length!=0)?elementFromContactChat[0]:[]);


    const filteredData = array.filter((contact) => {
        if (search === '') {
            return contact;
        }
        else if(contact.name.toLowerCase().includes(search.toLowerCase())){
            return contact;
        }
    })
    const handleClick = (contact) => {
        SetSelectedContact(contact);
    }


    

    const chatList = filteredData.map((contact, key) => {
        return (
            <div className="contacts-map">
                <div className={(selectedContact.name === contact.name) ? "selected-contact" : "contacts"}
                    onClick={() => handleClick(contact)}>
                    <img className={(selectedContact.name === contact.name) ? "selected-contacts-image" : "contacts-image"}
                        src={contact.image} alt="icon"></img>
                    <div className={(selectedContact.name === contact.name) ? "selected-message" : "message"}>
                        <h6 className={(selectedContact.name === contact.name) ? "selected-contact-name" : "contact-name"}>{contact.nickName}</h6>
                        <p className={(selectedContact.name === contact.name) ? "selected-text-muted" : "text-muted"}>{contact.message}</p>
                    </div>
                    <span className="time-text-muted-small">{(contact.message=="")?"":(contact.time>0)?(contact.time>1)?(contact.time>59)?(contact.time>=120)?(contact.time>=1440)?(contact.time>=2880)?(`${Math.floor(contact.time/1440)} days ago`):("1 day ago"):(`${Math.floor(contact.time/60)} hours ago`):("1 hour ago"):
                    (`${contact.time} minutes ago`):(`1 minute ago`):("just now")}</span>
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
        setAddContactSubmit(false);
    } ;

    const handleAddContact=()=>{
        setAddContactSubmit(true);
        setInDatabase(false);
        setIsContact(false);
        if(newContact===""){
            setNewContactError("new contact username is required");
            setAddContactSubmit(false);
        }
        //change to login username.......
        else if(newContact===props.user.userName){
            setNewContactError("can't add yourself as contact");
            setAddContactSubmit(false);
        }
        else{
            userList.map((item)=>compareUserList(item));
            array.map((item)=>compareContacts(item))
        }
    }

    useEffect(()=>{
        if(addContactSubmit && !inDatabase){
            setNewContactError("can't find user");
        }
        else if(addContactSubmit && isContact){
            setNewContactError("user is already contact");
        }
        else if(addContactSubmit && !isContact && inDatabase){
            array.unshift({ name: newContact,nickName:currnetContact.nickName, message: "",time:0, image: currnetContact.picture});
            handleClose();
        }
    },[addContactSubmit,isContact,inDatabase]);



    useEffect(()=>{
        if(lastMessage!=""){
            array.map((contact)=>{
                if(contact.name==selectedContact.name){
                    contact.message=lastMessage;
                    contact.time=-1;
                }
            })
            array.sort((a,b)=>(a.time>b.time)?1:(a.time===b.time)?0:-1)
            array.map((contact)=>{
                if(contact.name==selectedContact.name){
                    contact.time=0;
                }
            })
            setLastMessage("");
        }
    },[lastMessage])

    useEffect(() => {
        const interval = setInterval(() => {
            array.map((contact)=>{
                contact.time+=1;;
                setMinutes((minutes)=>minutes+1);
            })
        }, 1000*60);
    
        return () => clearInterval(interval);
      }, []);


      useEffect(() => {
      }, [minutes]);


    function compareUserList(item){
        if(item.userName===newContact){
            setInDatabase(true);
            setCurrentContact(item);
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
                        <img className="profile-image" src={props.user.picture} alt="icon"></img>
                        <span className="profile-name">{props.user.userName}</span>
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

                    {(selectedContact.name) ?(<ChatMessages name={selectedContact.nickName} img={selectedContact.image} setLastMessage={setLastMessage} />)
                        : <div className="select-text">Select a chat to start messaging</div>}
                </div>
            </div>
        </div>

    );
}

export default Chat;