import './Chat.css';

function Chat() {
    return (    
        <div className="container-fluid chat">
            <div className="row chat">
            
                <div className="col-md-5 contacts-colomn">
                    <div className="profile-panel">
                        <img className="profile-image" src="./images/cat.png" alt="icon"></img>
                        <span className="profile-name">Rita</span>
                        <span className="add-contact">
                            <i className="bi bi-person-plus float-end"></i>
                        </span>
                    </div>
                    <div className="search-box">
                        <div className="input-wrapper">
                            <i className="bi bi-search"></i>
                            <input type="text" placeholder="Search chat"></input>
                        </div>
                    </div>

                    <div className="contacts">
                        <img className="contacts-image" src="./images/cat1.png" alt="icon"></img>
                        <div className="message">
                            <h6 className="contact-name">Daniel</h6>
                            <p className="text-muted">Hey, have you seen the news?</p>
                        </div>
                        <span className="time text-muted small">1 minute ago</span>
                    </div>
                    <hr />
                    <div className="contacts">
                        <img className="contacts-image" src="./images/cat2.png" alt="icon"></img>
                        <div className="message">
                            <h6 className="contact-name">Moshe</h6>
                            <p className="text-muted">Hey, have you seen the news?</p>
                        </div>
                        <span className="time text-muted small">1 minute ago</span>
                    </div>
                    <hr />
                    <div className="contacts">
                        <img className="contacts-image" src="./images/cat3.png" alt="icon"></img>
                        <div className="message">
                            <h6 className="contact-name">Sara</h6>
                            <p className="text-muted">Hey, have you seen the news?</p>
                        </div>
                        <span className="time text-muted small">1 minute ago</span>
                    </div>
                    <hr />
                    <div className="contacts">
                        <img className="contacts-image" src="./images/cat4.png" alt="icon"></img>
                        <div className="message">
                            <h6 className="contact-name">Alice</h6>
                            <p className="text-muted">Hi! Do you come to my b-day party tonight?</p>
                        </div>
                        <span className="time text-muted small">5 minutes ago</span>
                    </div>
                    <hr />
                    <div className="contacts">
                        <img className="contacts-image" src="./images/cat7.png" alt="icon"></img>
                        <div className="message">
                            <h6 className="contact-name">Bob</h6>
                            <p className="text-muted">Hey, have you seen the news?</p>
                        </div>
                        <span className="time text-muted small">1 minute ago</span>
                    </div>
                    
                </div>

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