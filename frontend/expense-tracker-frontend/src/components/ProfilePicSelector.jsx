import React,{useRef,useState} from 'react'
import {LuUser , LuUpload , LuTrash} from 'react-icons/lu'

export default function ProfilePicSelector({image, setImage}) {
    const inputRef = useRef(null);
    const [previewURL, setPreviewURL] = useState(null);

    const handleFileChange = (event) => { // Handle file selection
    const file = event.target.files[0]

    if(file) setImage(file);

    const preview = URL.createObjectURL(file);
    setPreviewURL(preview);
  }
    const removeImage= () =>{ // Remove selected image
    setImage(null);
    setPreviewURL(null);

    // Clear the input field
    if(inputRef.current) {
        inputRef.current.value = null; 
    }
  }
    const onChooseFile =() =>{ // Trigger file input click
    if(inputRef.current) {
        inputRef.current.click();
    }
}
  return (
    <div className='flex justify-center mb-6 p-10'>
    <input 
        type = "file"
        accept='image/*'
        onChange={handleFileChange}
        ref={inputRef}
        className='hidden'
        />
        {!image? (
            <div className="w-24 h-24 flex items-center justify-center bg-purple-100 rounded-full relative">

                <LuUser className='text-4xl text-primary'/>

                <button 
                type ="button" 
                className='w-8 h-8 cursor-pointer flex items-center justify-center bg-primary text-white m-2 rounded-full absolute -bottom-1 -right-1' 
                onClick={onChooseFile}>
                <LuUpload/>
                </button>

            </div>
        ) : (
            <div className='relative'>
                <img src={ previewURL }
                alt='Profile Photo'
                className='w-20 h-20 rounded-full object-cover shadow-md' />

                <button 
                type='button' 
                // className='absolute top-0 right-0 bg-red-500 text-white rounded-full p-1'
                className='w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute bottom-1 right-1'
                onClick={removeImage}>
                <LuTrash/>
                </button>
            </div>
        )}
    </div>
  )
        
        }




