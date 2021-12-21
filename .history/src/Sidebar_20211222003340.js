import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar,IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <Avatar src=/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        {/* iconbutton is a parent of 
                        all icons and makes them 
                        clickable */}
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    );

}

export default Sidebar
