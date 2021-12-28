import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import React from "react";
import Pusher from "pusher-js"

function App() {
  useEffect(() => {
    const pusher = new Pusher('11eff1cbbe0451f43821', {
      cluster: 'ap2'
    });
      const channel = pusher.subscribe('messages');
      channel.bind('my-event', (data)=> {
        alert(JSON.stringify(data));
      });
    
  }, [])
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
