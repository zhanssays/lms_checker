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
      url: "http://localhost:8000/api/kaznu/start-exam/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMDUiLCJuYW1lIjoia2F6bnUiLCJkdXJhdGlvbiI6NjAsInRpbWVvcGVuIjoxNjAzNjcwNDAwLCJ0aW1lY2xvc2UiOjE3MDQwMjk2MDAsImV4YW1fbmFtZSI6IkJpb2xvZ3kiLCJydWxlcyI6eyJmYWNlX3JlYyI6dHJ1ZSwic2NyZWVuIjp0cnVlLCJsaXZlX2NoYXQiOmZhbHNlLCJhdWRpbyI6dHJ1ZSwic3RyZWFtIjp0cnVlLCJhdXRob3JpemUiOmZhbHNlLCJjbGlwYm9hcmQiOnRydWUsImR1YWxfc2NyZWVuIjpmYWxzZSwibW9iaWxlIjpmYWxzZX0sInVybCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS8_YXR0ZW1wdGlkPTMwMTIiLCJzdWJtaXRfdXJsIjoiaHR0cHM6Ly90aGUtc3RlcHBlLmNvbS8iLCJjaGVhdGluZ19jb2RlIjoxMDAsImV4cCI6MTYwNDA3NzM2NiwianRpIjoiZDljYTcxZjQtN2IxOS00NThhLTgyZmQtZDY3ZTVjNTExNDdlIiwiaWF0IjoxNjA0MDczNzY2fQ.EgA5IcajT1jXfoipKCoVPrHBtoXOoaf_dYcRv-LztOM",
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
      <button onClick={connect}>Start</button>
      <button onClick={()=>submitAero('100')}>submit</button>

    </>
  );
}

export default App;
