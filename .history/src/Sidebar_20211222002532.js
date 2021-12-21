import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar,IconButton } from '@mui/material';
import { MoreVertIcon } from '@material-ui/icons/;
import { ChatrtIcon } from '@mui/icons-material';


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <div className="sidebar_headerRight">
                    <IconButton>
                        {/* iconbutton is a parent of 
                        all icons and makes them 
                        clickable */}
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatrtIcon/>
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
