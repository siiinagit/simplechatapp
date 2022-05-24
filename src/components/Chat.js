import {
  getDocs,
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import SignOut from "./SignOut";
import { useState, useEffect , useRef} from "react";
import { chatDatebase, chatAuth } from "../firebase-config";
import SendMessage from "./SendMessage";

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const chatData = collection(chatDatebase, "messages");
    const q = query(chatData, orderBy("createdAt", "desc"), limit(6));
    const snap = onSnapshot(q, (doc) => {
      setMessages(doc.docs.map((doc) => doc.data()));
    });
    const getMessages = async () => {
      const data = await getDocs(snap);
      setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMessages();
  }, []);

  return (
    <div>
      <SignOut />
    <div className="msgs">
       {messages.map((msg) => {
        return (
          <div>
            <div
              key={msg.id}
              className={`msg ${
                msg.uid === chatAuth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={msg.image} alt="img" className="userImage" />
              {/* <span className="userName">{msg.displayName}:</span> */}
              <p className="userMessage">{msg.text}</p>
            </div>
          </div>
        );
      })}
    </div>
     
      <SendMessage scroll={scroll}/>
      <div ref={scroll}></div>
    </div>
  );
};

export default Chat;
