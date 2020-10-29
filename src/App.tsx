import React from 'react';
import Axios from "axios";
// import { useDispatch, useSelector } from 'react-redux';
// import {NewNoteInput} from './NewNoteInput';
// import { NotesState } from './noteReducer'
// import { addNote } from './actions'

function App() {
  // const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
  // const dispatch = useDispatch()

  // const onAddNote = (note: string) => {
  //   dispatch(addNote(note));
  // }

  const connect = () => {
    Axios({
      method: "get",
      url: "http://localhost:8000/api/kaznu/start-exam/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMDU3IiwibmFtZSI6Imthem51IiwiZHVyYXRpb24iOjYwLCJ0aW1lb3BlbiI6MTYwMzY3MDQwMCwidGltZWNsb3NlIjoxNjA0MDI5NjAwLCJleGFtX25hbWUiOiJCaW9sb2d5IiwicnVsZXMiOnsiZmFjZV9yZWMiOmZhbHNlLCJzY3JlZW4iOnRydWUsImxpdmVfY2hhdCI6ZmFsc2UsImF1ZGlvIjp0cnVlLCJzdHJlYW0iOnRydWUsImF1dGhvcml6ZSI6ZmFsc2UsImNsaXBib2FyZCI6dHJ1ZSwiZHVhbF9zY3JlZW4iOmZhbHNlLCJtb2JpbGUiOmZhbHNlfSwidXJsIjoiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8iLCJzdWJtaXRfdXJsIjoiaHR0cHM6Ly90aGUtc3RlcHBlLmNvbS8iLCJjaGVhdGluZ19jb2RlIjoxMDA4LCJqdGkiOiJmMWNlYWMxYi0yNDI4LTQ5Y2UtYWNjMS0zOTI5NWE4YjFkOTMiLCJpYXQiOjE2MDM5NzAzNjYsImV4cCI6MTYwMzk3Mzk2Nn0.9aNh9SceW1x-iPp3SntOCvIOcFTCQV6qpDIcl5RdZwc",
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

  return (
    <>
      {/* <NewNoteInput addNote={onAddNote}/>
      <hr/>
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>
        })}
      </ul> */}
      <button onClick={connect}>Start</button>
      <button onClick={()=>window.location.replace(`http://localhost:3000/submit-quiz/?cheating_code=${'1008'}&redirectUrl=http://localhost:3001`)}>submit</button>

    </>
  );
}

export default App;
