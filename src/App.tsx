import React, { useState } from 'react';
import Axios from "axios";
var jwt = require('jsonwebtoken');



function App() {
  const [code, setCode] = useState('test')
  const [duration, setDuration] = useState<string|number>(10)
  const [data, setData] = useState({org: 'kaznu', secret: 'abc'})
  const connect = () => {
    const token = jwt.sign({
      data: 'foobar',
      userId: '1',
      exam_name: 'hello',
      timeopen: Math.ceil(new Date().getTime()/1000),
      timeclose: Math.ceil(new Date().getTime()/1000)+10000,
      duration: duration,
      cheating_code: code,
      rules: {
        face_rec: true,
        screen: false, 
        stream: true,
      },
      url: 'http://localhost:3000',

    }, data.secret, { expiresIn: '1h' });
    
    Axios({
      method: "get",
      url: `http://localhost:8000/api/${data.org}/start-exam/?token=${token}`,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch(async (err) => {
        if (!err.response) {
          console.log(err);
        }
      });
    
  }
  const submitAero = ( sessionId: string )=>{

    window.onmessage = async function(event: any){
        if (event.data.message == "can_submit" && event.data.cheating_code==sessionId){
            // redirect to result page ( Завершите экзамен и перенаправьте куда нужно)
            // CALL YOUR FUNCTION HERE
            window.location.replace('http://localhost:3001/results') 
        } 
    }
    
    window.postMessage({message: 'submit_quiz_aero', cheating_code: sessionId}, window.location.origin)
}

  return (
    <>
      {/* <NewNoteInput addNote={onAddNote}/>
      <hr/>
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>
        })}
      </ul> */}
      <input value={data.secret} onChange={(e)=>setData({...data, secret: e.target.value})} placeholder="secret"></input>
      <input value={data.org} onChange={(e)=>setData({...data, org: e.target.value})} placeholder="organization"></input>
      <input value={code} onChange={(e)=>setCode(e.target.value)}></input>
      <input value={duration} onChange={(e)=>setDuration(e.target.value)}></input>
      <button onClick={connect}>Start</button>
      <button onClick={()=>submitAero(code)}>submit</button>

    </>
  );
}

export default App;
