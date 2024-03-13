import React from 'react'
import './social.css'
const Newpost = ({setTitle,setContent,createNewPost}) => {
  return (
    <>
    <h1>Create Post</h1>
    <form onSubmit={createNewPost}>

     <input type="text" 
     id='title' 
     placeholder='Enter Title...' 
     onChange={(e) => setTitle(e.target.value)}
     required
     />
     <input type="text" 
     id='message'
     placeholder='Write Content....'
     onChange={(e) => setContent(e.target.value)}
     required
     />
     <button type='submit'>Create Post</button>
    </form>
    </>
  )
}

export default Newpost