import { AttachFile, InsertEmoticon, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import React from 'react'
import './Chat.css';

function Chat({messages}) {
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
            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.received && "chat_receiver"}`}>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">{message.timestamp}</span>
                    </p>
                ))}
            
            </div>
            
            <div className="chat_footer">
                    <InsertEmoticon/>
            <form>
                <input placeholder="Type a message"
                type="text"/>
                <button type="submit"> Send a message
                </button>
            </form>
            <MicIcon/>
            </div>
        </div>
    );
}

export default Chat
