import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar'; React from "react";

function App() {
  return (
    
    <div className="app">
      <div className="app_body">
        <Sidebar/>
         <Chat/>
      </div>
    </div>
  );
}

export default App;
