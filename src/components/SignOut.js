import { Button } from "@mui/material"
import { signOut } from "firebase/auth"
import { chatAuth } from "../firebase-config"

const SignOut = () => {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
  }}>
      <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '5px', fontWeight: '600' }} onClick={()=>signOut(chatAuth)}>SignOut</Button>
    </div>
    
  )
}

export default SignOut