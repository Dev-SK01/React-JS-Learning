import React from 'react'
import './social.css'
import { Link, Outlet } from 'react-router-dom'
const Navigation = () => {

  return (
    <>
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