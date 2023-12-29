import React from 'react'
import './App.css'

const Footer = ({react}) => {
  return (
    <footer className='footer'  style={{fontSize:'1.2rem' , backgroundColor:'blueviolet'}}>
      <p>{react}</p>
    </footer>
  )
}

Footer.defaultProps = {
   react : 'Default Footer DIV'
}
export  {Footer};