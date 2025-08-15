import React, { useState } from 'react'
import {FaRegEye ,FaRegEyeSlash } from 'react-icons/fa'

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
            classname ="w-full bg-transparent outline-none"
            value={value}
            onChange={(e) =>onChange(e)}
            />

            {type === 'password' && (
            <>
                {showPassword? (
                    <FaRegEye size ={22}
                    className= "text-primary cursor-pointer"
                    onClick={() => toggleShowPassword()}
                    />
                ) :(
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
