import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
const SignUp = () => {

  // initialize your hooks
  const[username,setUsername]=useState()
  const[email,setEmail]=useState()
  const[phone,setPhone]=useState()
  const[password,setPassword]=useState()

  // initialize other hooks for loading,success and error
  const[loading,setLoading]=useState()
  const[success,setSuccess]=useState()
  const[error,setError]=useState()

  // function that will send our data to the database
  const submit=async(e)=>{

    e.preventDefault()
    setLoading("Please wait as we sign you up")
    
    

    try {
      // sending data to the database
      const data=new FormData()

    data.append("username",username)
    data.append("email",email)
    data.append("phone",phone)
    data.append("password",password)

    // call our API
    const response=await axios.post("https://gideonk.alwaysdata.net/api/signup",data)

    setLoading("")

    setSuccess(response.data.message)

    setUsername("")
    setPassword("")
    setEmail("")
    setPhone("")

      
    } catch (error) {

      setLoading("")
      setError(error.message)
      

    }


   







  }
  
  return (
    <div className='row justify-content-center m-top-3'>

      <div className='card shadow col-md-6'>
        <h1>Sign Up</h1>
        <form action="" onSubmit={submit}> 

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>
          
        {/* {username} */}
        <input type="text"placeholder='Enter your username' className='form-control'value={username} required onChange={(e)=>setUsername(e.target.value)} /><br /><br />


        {/* {email} */}
        <input type="email" placeholder='Enter your email' className='form-control' required value={email} onChange={(e)=>setEmail(e.target.value)}/><br /><br />
       

        {/* {phone} */}
        <input type="tel" placeholder='Enter your phone number' className='form-control'required value={phone} onChange={(e)=>setPhone(e.target.value)}/><br /><br />


        {/* {password} */}
        <input type="password" placeholder='Enter your password' className='form-control'required value={password}onChange={(e)=>setPassword(e.target.value)}/><br /><br />
        


        <input type="submit" value="Sign Up" className='w-100 form-control bg-info text-white'required/><br /><br />

        <p>Already have an account?<Link to="/signin"> Sign In</Link></p>
        </form>

      </div>




    </div>
  )
}

export default SignUp
