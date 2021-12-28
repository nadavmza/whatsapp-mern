import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import React from "react";

function App() {
  useEffect(() => {
    const pusher = new Pusher('11eff1cbbe0451f43821', {
      cluster: 'ap2'
    });
      const channel = pusher.subscribe('my-channel');
      channel.bind('my-event', function(data) {
        alert(JSON.stringify(data));
      });
    
  }, [input])
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
