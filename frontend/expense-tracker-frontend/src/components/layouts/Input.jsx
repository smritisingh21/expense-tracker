import React, { useState } from 'react'
import {FaRegEye ,FaRegEyeSlash } from 'react-icons/fa'
// Input component for forms
// It handles different input types and shows/hides password
// based on user interaction
export default function Input({type , value , label , onChange , placeholder}) {
    const [showPassword , setShowPassword] = useState(false);

    const toggleShowPassword=()=>{
        setShowPassword(!showPassword);
    }
  return (
    <div>
        <label className='text-[13px] text-slate-800'>{label}</label>
        <div className='input-box'>
            
            <input
            type={type == 'password'? showPassword ? 'text': 'password' :type }
            placeholder={placeholder}
            className ="w-full bg-transparent outline-none"
            value={value}
            onChange={(e) =>onChange(e)}
            />

            {type === 'password' && ( // Show eye icon only for password input
            <>
                {showPassword? ( // Show eye icon when password is visible
                    <FaRegEye size ={22}
                    className= "text-primary cursor-pointer"
                    onClick={() => toggleShowPassword()}
                    />
                ) : (
                    <FaRegEyeSlash size ={22}
                    className= "text-primary cursor-pointer"
                    onClick={() => toggleShowPassword()}
                    />
                )
            }
             </>
            )}
        </div>
    </div>
       
  )
}
