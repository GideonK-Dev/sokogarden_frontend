import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const SignIn = () => {
  // initialize your hooks
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  // a hook used to navigate user

  const navigate=useNavigate();

  const submit=async(e)=>{

    e.preventDefault()
    setLoading("Please wait......")

    //Add data to data object

    try {
      const data=new FormData();
      data.append("email",email);
      data.append("password",password);


    const response=await axios.post("https://gideonk.alwaysdata.net/api/signin",data)

    

    setLoading("")

    setEmail("")
    setPassword("")

    // check if the response has user item

    if (response.data.user){
      // if user is Found,store user details in localstorage
      localStorage.setItem("user",JSON.stringify(response.data.user));
      setSuccess(response.data.message)


      // Redirect to /getproducts component
      setTimeout(()=>{

        navigate("/");
        
      },2000)
    }
    else{
      // user not found, show error message
      setError(response.data.message);
    }




      
    } catch (error) {

      setLoading("")
      setError(error.data.message)
      
    }


  }
  return (
    
    <div className='row justify-content-center m-top-3 '>
      <div className='card shadow col-md-6'>

        <form action="" onSubmit={submit}>
              <h1>Sign In</h1>

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

        <input type="email" placeholder='Email' className='form-control' required value={email} onChange={(e)=>setEmail(e.target.value)}/><br /><br />
       

        
        <input type="password" placeholder='Password' className='form-control'required value={password}onChange={(e)=>setPassword(e.target.value)}/><br /><br />
        


        <input type="submit" value="Sign In" className='w-100 form-control bg-info text-white'required/><br /><br />

        <p>Don't have an account ?<Link to="/signup"> Sign Up</Link></p>
        </form>
      </div>


    </div>

  )
}

export default SignIn