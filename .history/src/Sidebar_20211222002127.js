import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar,IconButton } from '@mui/material';
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
                        
                    </IconButton>
                </div>
            </div>
        </div>
    );

}

export default Sidebar
