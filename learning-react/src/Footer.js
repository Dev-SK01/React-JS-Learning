import React from 'react'
import './App.css'

const Footer = ({react , length}) => {
  return (
    <footer className='footer'>
      <p><i className="bi bi-person-walking"></i>
      {react} {length + ' Lists :)'} 
      </p>
    </footer>
  )
}

Footer.defaultProps = {
   react : 'Default Footer DIV'
}
export  {Footer};