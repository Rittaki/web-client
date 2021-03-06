import { useEffect, useState } from 'react';
import './Chat.css';
import { Modal, Button } from 'react-bootstrap';
import AddNewContact from './addContact/AddNewContact';
import ChatMessages from './chatMessages/ChatMessages';
 import { userList } from '../Login';

function Chat(props) {

    //hardcoded list of contacts
    const contact_chat = [{user:"Rita",info:[{ name: "Daniel",nickName:"daniel", message: "Don't forget to bring the present!",time:1, image: "./images/cat1.png" },
    { name: "Moshe",nickName:"moshe", message: "i've waited months to see it!",time:2, image: "./images/cat3.png" },
    { name: "Sara",nickName:"sara", message: "I have to do homework in Advanced Programming 2",time:3, image: "./images/cat4.png" },
    { name: "Alice",nickName:"alice", message: "stop texting me",time:4, image: "./images/cat5.png" },
    { name: "Bob",nickName:"bob", message: "i heard there are some new flights to Sinai",time:5, image: "./images/cat6.png" }]},
    {user:"Daniel",info:[{ name: "Rita",nickName:"rita", message: "Don't forget to bring the present!",time:1, image: "./images/cat2.png" },
    { name: "Moshe",nickName:"moshe", message: "i've waited months to see it!",time:2, image: "./images/cat3.png" },
    { name: "Sara",nickName:"sara", message: "I have to do homework in Advanced Programming 2", time:3,image: "./images/cat4.png" },
    { name: "Alice",nickName:"alice", message: "stop texting me",time:4, image: "./images/cat5.png" },
    { name: "Bob",nickName:"bob", message: "i heard there are some new flights to Sinai",time:5, image: "./images/cat6.png" }]},
    {user:"Moshe",info:[{ name: "Daniel",nickName:"daniel", message: "i've waited months to see it!",time:1, image: "./images/cat1.png" },
    { name: "Rita",nickName:"rita", message: "Don't forget to bring the present!",time:2, image: "./images/cat2.png" },
    { name: "Sara",nickName:"sara", message: "I have to do homework in Advanced Programming 2",time:3, image: "./images/cat4.png" },
    { name: "Alice",nickName:"alice", message: "stop texting me",time:4, image: "./images/cat5.png" },
    { name: "Bob",nickName:"bob", message: "i heard there are some new flights to Sinai",time:5, image: "./images/cat6.png" }]},
    {user:"Sara",info:[{ name: "Daniel",nickName:"daniel", message: "I have to do homework in Advanced Programming 2",time:1, image: "./images/cat1.png" },
    { name: "Moshe",nickName:"moshe", message: "i've waited months to see it!",time:2, image: "./images/cat3.png" },
    { name: "Rita",nickName:"rita", message: "Don't forget to bring the present!",time:3, image: "./images/cat2.png" },
    { name: "Alice",nickName:"alice", message: "stop texting me",time:4, image: "./images/cat5.png" },
    { name: "Bob",nickName:"bob", message: "i heard there are some new flights to Sinai",time:5, image: "./images/cat6.png" }]},
    {user:"Alice",info:[{ name: "Daniel",nickName:"daniel", message: "stop texting me",time:1, image: "./images/cat1.png" },
    { name: "Moshe",nickName:"moshe", message: "i've waited months to see it!",time:2, image: "./images/cat3.png" },
    { name: "Sara",nickName:"sara", message: "I have to do homework in Advanced Programming 2",time:3, image: "./images/cat4.png" },
    { name: "Rita",nickName:"rita", message: "Don't forget to bring the present!",time:4, image: "./images/cat2.png" },
    { name: "Bob",nickName:"bob", message: "i heard there are some new flights to Sinai",time:5, image: "./images/cat6.png" }]},
    {user:"Bob",info:[{ name: "Daniel",nickName:"daniel", message: "i heard there are some new flights to Sinai",time:1, image: "./images/cat1.png" },
    { name: "Moshe",nickName:"moshe", message: "i've waited months to see it!",time:2, image: "./images/cat3.png" },
    { name: "Sara",nickName:"sara", message: "I have to do homework in Advanced Programming 2",time:3, image: "./images/cat4.png" },
    { name: "Alice",nickName:"alice", message: "stop texting me",time:4, image: "./images/cat5.png" },
    { name: "Rita",nickName:"rita", message: "Don't forget to bring the present!",time:5, image: "./images/cat2.png" }]}
];

    const [selectedContact, SetSelectedContact] = useState({});
    //for search bar
    const[search, setSearch]=useState("");
    //for adding new contact
    const [newContact, setNewContact] = useState("");
    const[inDatabase, setInDatabase] = useState(false);
    const[isContact, setIsContact] = useState(false);
    const[newContactError,setNewContactError]=useState("");
    const [show, setShow] = useState(false);
    const[addContactSubmit,setAddContactSubmit]=useState(false);
    const[currnetContact, setCurrentContact]=useState({});
    //last message update and time since
    const [lastMessage,setLastMessage]=useState("");
    const [minutes,setMinutes]=useState(0);
    //info about the current user
    const [newSign,setNewSign]=useState(false);
    const [saveUser, setSaveUser] = useState((props.user===undefined)?JSON.parse(localStorage.getItem('user')):props.user);
    

    //filters contacts for the current user
    const elementFromContactChat=contact_chat.filter((item)=>{
        if(item.user===saveUser.userName){
            return item;
        }
    }).map((filteredElement=>(
        filteredElement.info)
    ));
    //contacts of current user
    const[array,setArray]=useState((elementFromContactChat.length!=0)?elementFromContactChat[0]:[]);
    
    //for searching contacts
    const filteredData = array.filter((contact) => {
        if (search === '') {
            return contact;
        }
        else if(contact.name.toLowerCase().includes(search.toLowerCase())){
            return contact;
        }
    })
    //for clicking on contact from the list of contacts
    const handleClick = (contact) => {
        SetSelectedContact(contact);
    }


    //showing all the contacts the user has
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

    //showing window of adding contact
    const handleShow = () => setShow(true);
    const handleClose = ()=> {
        setShow(false);
        setNewContact("");
        setInDatabase(false);
        setIsContact(false);
        setNewContactError("");
        setAddContactSubmit(false);
    } ;

    //checks if added contact is valid without checking database
    const handleAddContact=()=>{
        setAddContactSubmit(true);
        setInDatabase(false);
        setIsContact(false);
        if(newContact===""){
            setNewContactError("new contact username is required");
            setAddContactSubmit(false);
        }
        else if(newContact===saveUser.userName){
            setNewContactError("can't add yourself as contact");
            setAddContactSubmit(false);
        }
        else{
            userList.map((item)=>compareUserList(item));
            array.map((item)=>compareContacts(item))
        }
    }

    //checking if added contact is in the user database but not already a contact
    useEffect(()=>{
        if(array.length==0){
            setNewSign(true)
        }
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



    //changes last message in contact panel when a message is sent and moving the contact to the top of the contact list
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

    //updating the time since last message every minute
    useEffect(() => {
        const interval = setInterval(() => {
            array.map((contact)=>{
                contact.time+=1;;
                setMinutes((minutes)=>minutes+1);
            })
        }, 1000*60);
    
        return () => clearInterval(interval);
      }, []);


      //renders every time minute passes so the changes in time since last message will appear
      useEffect(() => {
      }, [minutes]);


      //saves user info so in case of a refresh it will stay in his chat page
      useEffect(() => {
          if(props.user!=undefined){
            localStorage.setItem('user', JSON.stringify(props.user))
          }
    },[]);
      


    //checks if added contact appears in users database
    function compareUserList(item){
        if(item.userName===newContact){
            setInDatabase(true);
            setCurrentContact(item);
        }
    }

    //checks if added contact is already a contact of current user
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
                        <img className="profile-image" src={saveUser.picture} alt="icon"></img>
                        <span className="profile-name">{saveUser.nickName}</span>
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

                    {(selectedContact.name) ?(<ChatMessages newSign={newSign} logInUserName={saveUser.userName} contactUserName={selectedContact.name} nickname ={selectedContact.nickName} img={selectedContact.image} setLastMessage={setLastMessage} />)
                        : <div className="select-text">Select a chat to start messaging</div>}
                </div>
            </div>
        </div>

    );
}

export default Chat;