import { AttachFile, InsertEmoticon, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import React from 'react'
import './Chat.css';

function Chat({messages}) {
const [input,setInput] = useState("");

const sendMessage= (e)=>{
    e.preventDefault();
    
}
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar/>
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at..</p>
                </div>
                <div className="chat_headerRight">

                 <IconButton>
                    <SearchOutlined/>
                 </IconButton>
                 <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div>
            </div>
            <div className="chat_body">
                {messages.map((message) =>(
                    <p className={`chat_message ${message.received && "chat_reciever"}`}
                    >
                    <span className="chat_name">{message.name}</span>
                        {message.message}
                    <span className="chat_timestap">
                        {message.timestap}
                    </span>
                   </p>
                ))}
            
            </div>
            
            <div className="chat_footer">
                    <InsertEmoticonIcon/>
            <form>
                <input value ={input} onChange placeholder="Type a message"
                type="text"/>
                <button onClick={sendMessage} type="submit"> Send a message
                </button>
            </form>
            <MicIcon/>
            </div>
        </div>
    );
}

export default Chat
