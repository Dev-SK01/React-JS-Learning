import React from 'react'
import './App.css'

const Footer = () => {
    const year = new Date();
  return (
    <footer className='footer'  style={{fontSize:'1.5rem' , backgroundColor:'blueviolet'}}>
        <p>CopyRight &copy; {year.getFullYear()}.All Rights Reserved.</p>
    </footer>
  )
}

export  {Footer};