import { Button, Input } from "@mui/material";
import { chatDatebase, chatAuth } from "../firebase-config";
import { collection , addDoc, serverTimestamp} from "firebase/firestore";
import React,{useState} from "react";

const SendMessage = ({scroll}) => {
    const [msg, setMsg] = useState('')
    const createMessage = async (e) =>{
        e.preventDefault()
        const {uid, photoURL, displayName} = chatAuth.currentUser;
        const collections = collection(chatDatebase, 'messages')
        await addDoc(collections, {
            text: msg,
            image: photoURL,
            createdAt: serverTimestamp(),
            displayName,
            uid
        })
        setMsg('')
        scroll.current.scrollIntoView({behavior: 'smooth'});
    }
  return (
    <div>
      <form onSubmit={createMessage}>
        <Input style={{ width: '78%', fontSize: '12px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} value={msg} onChange={(e)=> setMsg(e.target.value)} placeholder="Message..." />
        <Button style={{ width: '18%', fontSize: '12px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">SEND</Button>
      </form>
    </div>
  );
};

export default SendMessage;
