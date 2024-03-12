import React from 'react'
import './social.css'
const Newpost = ({setPost}) => {
  return (
    <>
    <h1>Create Post</h1>
    <form onClick={(e)=>(e.preventDefault())}>

     <input type="text" 
     id='title' 
     placeholder='Enter Title' 
     required
     />
     <input type="text" 
     id='message'
     placeholder='Write Content....'
     required
     />
     <button type='submit'>Create Post</button>
    </form>
    </>
  )
}

export default Newpost