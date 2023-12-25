import React from 'react'
import './App.css'

const Footer = ({react,length}) => {
    const year = new Date();
  return (
    <footer className='footer'  style={{fontSize:'1.5rem' , backgroundColor:'blueviolet'}}>
        <p>CopyRight &copy; {year.getFullYear()}.All Rights Reserved. {length} : {react}</p>
    </footer>
  )
}

Footer.defaultProps = {
   react : 'React'
}
export  {Footer};