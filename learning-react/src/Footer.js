import React from 'react'
import './App.css'
import { itemCount } from './List_Keys';

const Footer = ({react}) => {
  return (
    <footer className='footer'  style={{fontSize:'1.2rem' , backgroundColor:'blueviolet'}}>
      <p>{itemCount}: {react}</p>
    </footer>
  )
}

Footer.defaultProps = {
   react : 'Elements'
}
export  {Footer};