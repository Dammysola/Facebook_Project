import { useState } from "react"
import Style from './Form.module.css'


const LogIn =(props)=>{

    const {state, setState} = props

    const [signedIn, SetSignedIn] = useState({
        email: "",
        password: ""
     })
    
       const UserDetail= (e)=>{
          const name = e.target.name
          const value = e.target.value
    
          SetSignedIn(
             (prevState)=>({
                ...prevState,
                [name]: value
             })
          )
       }

       const changeState =()=> {
        setState(!state)
       }
    
       const SubmitButton =(e)=>{
          e.preventDefault()
          console.log(signedIn.password, signedIn.email);
        }

        // const val =()=>{
        //     if (signedIn.password === " ") {
        //         document.getElementById("password").style.borderColor= "rgba(188, 455,66,0.5)"
        //     }
        // }
    
    return(
        <>
            <div id={Style.LogIn_main_div}>
                <div id={Style.facebook_div}>
                    <img id={Style.facebook} src="./src/assets/facebook_1.svg" alt="" />
                    <h2 id={Style.facebook_text}>Facebook helps you connect and share with the people in your life.</h2>
                </div>
                <form onSubmit={SubmitButton}>
                    <div id={Style.LogIn_form_div}>

                        <div>
                            <input className={Style.LogIn_input} type="text" name="email" placeholder="Email address or phone number" value={signedIn.email} onChange={UserDetail} />
                        </div> <br />

                        <div>
                            <input  className={Style.LogIn_input} type="password" placeholder="Password" name="password" value={signedIn.password} onChange={(e)=>{UserDetail(e), val()}} id="password" />
                        </div> <br />

                        <button id={Style.LogIn_Button} onSubmit={SubmitButton} >Log In</button> <br />
                        <div id={Style.forgotten_div}>
                            <a id={Style.forgotten} href="">Forgotten password?</a>
                        </div>
                        <hr />
                        <div id={Style.createAcc_div}>
                            <button id={Style.createAcc} onClick={changeState}>Create new account</button>
                        </div>
                    </div>
                    <p id={Style.last_text}><a id={Style.anchor} href="">Create a Page</a> for a celebrity, brand or business.</p>
                </form>
                
            </div>
        </>

    )
}
export default LogIn