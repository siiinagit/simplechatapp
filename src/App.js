import "./App.css";
import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import {useAuthState} from 'react-firebase-hooks/auth'
import { chatAuth } from "./firebase-config";

function App() {
  const [user] = useAuthState(chatAuth)
  return <>
  {user ? <Chat user={user} />:<SignIn /> }
  
  
  </>;
}

export default App;
