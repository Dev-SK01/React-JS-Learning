import React from 'react'
import './social.css'
import { Link, Outlet } from 'react-router-dom'
import Home from './Home'
const Navigation = () => {
  function handleSearch(){
    
  }
  return (
    <>
      <input 
      type='text'
      required
      id='search'
      placeholder='Search Posts....'
      onChange={handleSearch}
      />
      <nav className='navbar'>
        <Link to='post' >Posts</Link>
        <Link to='/' >Home</Link>
        <Link to='createpost' >Create Post</Link>
      </nav>
      {/* rendering the nested route */}
      <Outlet></Outlet>
    </>
  )
}

export default Navigation