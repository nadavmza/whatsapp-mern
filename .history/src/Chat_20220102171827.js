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
            <div className="chat_body">
                {messages.map((message)=>(
                    <p className={``}>
                    <span className="chat_name">{message.name}</span>
                        {message.message}
                    <span className="chat_timestap">
                        {message.timestap}
                    </span>
                   </p>
                ))}
                

                <p className='chat_message chat_reciever'>
                 <span className="chat_name">Sonny</span>
                 This is a message
                 <span className="chat_timestap">
                     {new Date().toUTCString()} 
                 </span>
                </p>
            </div>
            
            <div className="chat_footer">
                    <InsertEmoticonIcon/>
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
