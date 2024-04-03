import LogIn from './Components/Log_In'
import './App.css'
import SignIn from './Components/Sign_In'
import { useState } from 'react'

function App() {

  const [state, setState] = useState(false)
  

  return (
    <>
     <LogIn state ={state} setState={setState}/>
     {state && <SignIn  state ={state} setState={setState}/>}
    </>
  )
}

export default App
