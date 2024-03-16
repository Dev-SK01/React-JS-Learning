import React, { useContext } from 'react'
import './social.css'
import DataContext from '../context/DataContext'
const Newpost = () => {
  const {setTitle , setContent , createNewPost} =useContext(DataContext);
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