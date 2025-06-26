import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate =useNavigate()
const go2signIn=()=>{navigate("../signIn")}


  return (
    <div className='signClass'>
      <h1> SignUP</h1>
      <p>Enter your email and username , password to sign up!</p>
      <form action="">
        <input type="text" name="" id="" value="Enter your userName"/>
        <input type="email" name="" id="" value="Enter your email"/>
        <input type="text" name="" id=""  value="Enter your password"/>
        <button>Sign In</button>
      </form>
      <p className='secpar'>Don't have an account?<a href="" onClick={go2signIn}>logIn</a></p>
   
    </div>
  )
}

export default SignUp

