import './App.css';
import React, { useEffect} from 'react';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js"
import axios from './axios';

function App() {
  const[messages,setMessages]=useState([]);
  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response=>{
      console.log(response.data)
      setMessages(response.data)

    })
  },[])


  useEffect(() => {
      const pusher = new Pusher('11eff1cbbe0451f43821', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data)=> {
      alert(JSON.stringify(data));
    });
    
  }, []);
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
