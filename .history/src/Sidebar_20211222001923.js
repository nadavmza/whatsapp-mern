import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <div className="sidebar_headerRight">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    );

}

export default Sidebar
