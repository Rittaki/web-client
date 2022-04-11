import { useState, useRef, useEffect } from "react";
import "./ChatMessages.css";

export default function ChatMessages(props) {
    const containerRef = useRef(null);

    const [message, setMessage] = useState('');
    const [send, setSend] = useState(false);
    const handleSend = () => setSend(true);

    const chat_messages = [{ from: "me", message: "Hey, whats up?" },
    { from: "not", message: "Hey, have you seen the news?" },
    { from: "me", message: "What's the news?" },
    { from: "not", message: "Do you come to b-day party tonight?" },
    { from: "me", message: "Yes, sure!" },
    { from: "not", message: "Cool, see you!" },
    { from: "not", message: "Don't forget to bring the present!" }];

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

    const showItem = () => { // We activate this function when we got onClick on the "send icon"
        let item = { from: "me", message: message }; // Here we put our new item that we got from input
        chat_messages[chat_messages.length] = item;
    }

    if (send) {
        showItem(); // We activate like this
    }


    const messagesList = chat_messages.map((contact, key) => {
        if (contact.from === "me") {
            return (
                <div className="row">
                    <div className="col-md-3 offset-md-9">
                        <div className="chat-bubble chat-bubble--right">
                            <p className="text-muted">{contact.message}</p>
                            <span className="time text-muted small">00:01</span>
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
                        <span>
                            <i className="bi bi-paperclip "></i>
                        </span>
                        <input className="input-message" type={'text'} placeholder={'Write a message'}
                            onChange={(e) => setMessage(e.target.value)}>
                        </input>
                        <span className="send-message" onClick={handleSend}>
                            <i className="bi bi-send float-end"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}