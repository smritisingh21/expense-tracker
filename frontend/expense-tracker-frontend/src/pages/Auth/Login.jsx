import React , {  useContext, useState}from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/layouts/Input'
import {Link, useNavigate} from 'react-router-dom'
import {validateEmail} from '../../utils/helper'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import { UserContext } from '../../context/UserContext'

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(null);

  const {updateUser, clearUser} = useContext(UserContext);
  const navigate = useNavigate();

  //handle login form submit
 
  const handleLogin= async (e) => { 
  e.preventDefault();

   if(!validateEmail(email)){
   setError("Email not found. Please enter a valid email address.");
   return;
  }
  if(!password){
  setError("Invalid password");
  return;
  }
  else setError("");

//Login API call

  try{
  const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN,{
    email,
    password,
  })
  const {token , user} = response.data;

  if(token){
    localStorage.setItem("token" ,token);
    updateUser(user);
    navigate("/dashboard")
  }
  
  }catch(err){
  if(err.response && err.response.data.message ){
    setError(error.response.data.message)
  }else{
    setError("Something went wrong. Please try again")
  }
  }}
  return (
    <AuthLayout>
    <div className="lg: w-70% h-3/4 md:h-full flex flex-col justify-centre">
        <h3 className='texl-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6 '>
            Please enter your details to log in
        </p>

        <form onSubmit={handleLogin}>
          <Input
            type = "text"
            label ="Email Address"
            value = {email} 
            onChange = {(e) =>{ setEmail(e.target.value)}}
            placeholder = "John@example.com"
            />
          <Input
            type = "password"
            label ="Password"
            value = {password} 
            onChange = {(e) =>{ setPassword(e.target.value)}}
            placeholder = "Minimum 8 characters"
            />

            {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

            <button type='submit' className='btn-primary'>
              LOGIN
              </button>

            <p className='text-[13px] text-slate-800 mt-3' >
              Don't have an account? {" "}
              <Link className='font-medium text-primary underline' to='/signup'>
              SignUp
              </Link>
            </p>
        </form>
    </div>
    </AuthLayout>
  )
}
