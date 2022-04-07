import './Chat.css';

function Chat() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-panel float">
                        <img className="profile-image" src="./images/cat.png" alt="icon"></img>
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
                </div>
                <div className="col-md-8">Chat
                    <div className="chat">
                        <img className="profile-image" src="./images/cat1.png" alt="icon"></img>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Chat;