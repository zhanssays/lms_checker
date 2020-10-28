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
      url: "http://localhost:8000/api/kaznu/start-exam/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMDU3IiwibmFtZSI6Imthem51IiwiZHVyYXRpb24iOjYwLCJ0aW1lb3BlbiI6MTYwMzY3MDQwMCwidGltZWNsb3NlIjoxNjAzOTI5NjAwLCJleGFtX25hbWUiOiJCaW9sb2d5IiwicnVsZXMiOnsiZmFjZV9yZWMiOmZhbHNlLCJzY3JlZW4iOnRydWUsImxpdmVfY2hhdCI6ZmFsc2UsImF1ZGlvIjp0cnVlLCJzdHJlYW0iOnRydWUsImF1dGhvcml6ZSI6ZmFsc2UsImNsaXBib2FyZCI6dHJ1ZSwiZHVhbF9zY3JlZW4iOmZhbHNlLCJtb2JpbGUiOmZhbHNlfSwidXJsIjoiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8iLCJzdWJtaXRfdXJsIjoiaHR0cHM6Ly90aGUtc3RlcHBlLmNvbS8iLCJjaGVhdGluZ19jb2RlIjoxMDA4fQ.vODJZHEkBg7TMWRxN8txqEGCJxNu6I5wrEV-Wd437jg",
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
    </>
  );
}

export default App;
