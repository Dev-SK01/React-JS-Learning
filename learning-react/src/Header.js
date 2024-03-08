import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='header'>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bolder' }}>Notes Edu</h1>
            </header>
           
                <Link to="/" style={{marginRight:'.2rem'}} >Home</Link>
                <Link to="/color" style={{marginRight:'.2rem'}} >Color</Link>
                <Link to="/fetch">Fetch</Link>

         
        </>
    )
}

export { Header };
