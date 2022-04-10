import "./ChatMessages.css";

export default function ChatMessages() {
    return (
        <div>
            <div className="current-contact">
                <img className="profile-image" src="./images/cat4.png" alt="icon"></img>
                <span className="text">
                    <h6 className="contact-name">Alice</h6>
                    <p className="text-muted quote">Throw kindness around like confetti</p>
                </span>
            </div>
            <div className="current-chat">
                <div className="row">
                    <div className="col-md-3 ">

                        <div className="chat-bubble chat-bubble--left">
                            Hello
                            <span className="time text-muted small">00:01</span>
                        </div>
                        <div className="chat-bubble chat-bubble--left">
                            World
                            <span className="time text-muted small">00:02</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}