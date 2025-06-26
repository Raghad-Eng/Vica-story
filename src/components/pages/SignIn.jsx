import React from 'react'
import { useNavigate } from 'react-router-dom'


const SignIn = () => {

const navigate =useNavigate()
const go2signUp=()=>{navigate("../signUp")}


  return (
    <div className='signClass'>
     
      <h1> SignIn</h1>
      <p>Enter your email and password to sign in !</p>
      <form action="">
        <input type="email" name="" id="" value="Enter your email"/>
        <input type="text" name="" id=""  value="Enter your password"/>
        <button>Sign In</button>
      </form>
      <p className='secpar'>Don't have an account?<a href="" onClick={go2signUp}>Sign up</a></p>
    </div>
  )
}

export default SignIn
