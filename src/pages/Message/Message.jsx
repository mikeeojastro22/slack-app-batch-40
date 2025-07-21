import { useState } from "react";
import { useData } from "../../context/DataProvider";
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function Message() {
    const { userHeaders } = useData();
    const [receiver, setReceiver] = useState();
    const [message, setMessage] = useState();

    const handleSubmit = async (e) => {
        
    };

    return (
        <div className="sendMessage">
            <form onSubmit={handleSubmit}>
                <label>Send to:</label>
                <input
                    type="number"
                    className="input-style"
                    onChange={(event) => setReceiver(event.target.value)}
                >
                </input>
                <label>Message:</label>
                <input
                    type="text"
                    className="input-style"
                    onChange={(event) => setMessage(event.target.value)}
                >
                </input>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    );
};

export default Message;