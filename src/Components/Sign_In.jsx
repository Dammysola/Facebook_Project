import { useState } from "react";
import Style from './Form.module.css'


const SignIn = (props) => {
 
   const { state, setState } = props
   const [signedIn, SetSignedIn] = useState({
      firstName: "",
      surname: "",
      email: "",
      password: "",
      dateOfBirth: "",
      gender: ""

   })

   // const SignInVal = () => {
   //    const [validation, SetValidation] = useState({
   //       firstName: false,
   //       surname: false,
   //       email: false,
   //       password: false,
   //       dateOfBirth: false,
   //       gender: false

   //    })
   const UserDetail = (e) => {
      const name = e.target.name
      const value = e.target.value

      SetSignedIn(
         (prevState) => ({
            ...prevState,
            [name]: value
         })
      )

   }


   const changeState = () => {
      setState(!state)
   }

   const SubmitButton = (e) => {
      e.preventDefault()


      console.log(signedIn.password, signedIn.email);


   }

   // const handleValidation = () => {
   //    const { firstName, surname, email, password } = validation

   //    let firstVal = signedIn.firstName.length > 3 ? false : true
   //    let surnameVal = signedIn.surname.length > 3 ? false : true
   //    let emailVal = signedIn.email.includes("@") && signedIn.email.includes(".") ? false : true
   //    let passwordVal = signedIn.password.length > 8 ? false : true
   // }

   return (
      <>
         <div id={Style.Sign_in_cont}>

            <div id={Style.SignIn_main_div}>
               <div id={Style.header}>
                  <div id={Style.text}>
                     <div id={Style.SignUp}>Sign Up</div>
                     <div id={Style.quick}>It's quick and easy</div>
                  </div>
                  <button onClick={changeState}>
                     <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/11W0xEwKS62.png" />
                  </button>
               </div>

               <hr />

               <form onSubmit={SubmitButton}>
                  <div id={Style.Form}>
                     <div id={Style.NameInput_div}>
                        <div className={Style.Input_div}>
                           <input className={Style.NameInput} type="text" name='firstName' placeholder='First Name'
                              value={signedIn.firstName} onChange={UserDetail} /> <br /> <br />
                        </div>

                        <div className={Style.Input_div}>

                           <input className={Style.NameInput} type="text" name='surname' placeholder='Surname'
                              value={signedIn.surname} onChange={UserDetail} />  <br /> <br />
                        </div>
                     </div>

                     <div>
                        <input type="text" className={Style.Input} name="email" placeholder="Mobile number or email address" value={signedIn.email} onChange={UserDetail} />
                     </div> <br />

                     <div>
                        <input type="password" className={Style.Input} placeholder="New Password" name="password" value={signedIn.password} onChange={UserDetail} />
                     </div> <br />

                     <label className={Style.DOB_gender}>Date of Birth</label>
                     <div id={Style.DOB_main_div}>
                        <select name="" id={Style.DOB}>
                           <option value="">1</option>
                           <option value="">2</option>
                           <option value="">3</option>
                           <option value="">4</option>
                           <option value="">5</option>
                           <option value="">6</option>
                           <option value="">7</option>
                           <option value="">8</option>
                           <option value="">9</option>
                           <option value="">10</option>
                           <option value="">11</option>
                        </select>

                        <select name="" id={Style.DOB}>
                           <option value="">Jan</option>
                           <option value="">Feb</option>
                           <option value="">Mar</option>
                           <option value="">Apr</option>
                           <option value="">May</option>
                           <option value="">Jun</option>
                           <option value="">Jul</option>
                           <option value="">Aug</option>
                           <option value="">Sept</option>
                           <option value="">Oct</option>
                           <option value="">Nov</option>
                           <option value="">Dec</option>
                        </select>

                        <select name="" id={Style.DOB}>
                           <option value="">1999</option>
                           <option value="">2000</option>
                           <option value="">2001</option>
                           <option value="">2002</option>
                           <option value="">2003</option>
                           <option value="">2004</option>
                           <option value="">2005</option>
                           <option value="">2006</option>
                           <option value="">2007</option>
                           <option value="">2008</option>
                           <option value="">2009</option>
                           <option value="">2010</option>
                           <option value="">2011</option>
                           <option value="">2012</option>
                           <option value="">2013</option>
                           <option value="">2014</option>
                           <option value="">2015</option>
                           <option value="">2016</option>
                           <option value="">2017</option>
                        </select>
                     </div> <br />

                     <label className={Style.DOB_gender}>Gender</label>
                     <div id={Style.genderDiv}>
                        <div className={Style.Gender}>
                           <label>Female</label>
                           <input type="radio" name="" id="" />
                        </div>
                        <div className={Style.Gender}>
                           <label>Male</label>
                           <input type="radio" name="" id="" />
                        </div>
                        <div className={Style.Gender}>
                           <label>Custom</label>
                           <input type="radio" name="" id="" />
                        </div>
                     </div>

                     <div id={Style.Text_two}>
                        <p>People who use our service may have uploaded your contact information to <br />Facebook. <a href="">Learn more</a> </p>
                        <div>By clicking Sign Up, you agree to our <a href="">Terms</a>, <a href="">Privacy Policy</a> and <a href="">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</div>
                     </div>

                     <div id={Style.button_div}>
                        <button id={Style.SignUp_Button} onSubmit={SubmitButton} >Sign Up</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>

      </>

   )
}

export default SignIn
