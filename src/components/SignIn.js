import { Button } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { chatAuth } from "../firebase-config";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(chatAuth, provider);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
      <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '5px', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In With Google</Button>
    </div>
  );
};

export default SignIn;
