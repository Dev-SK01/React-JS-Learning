import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

const Header = ({title}) => {
    return (
        <>
            <header className='header'>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bolder' }}>{title}</h1>
            </header>
           
                <Link to="/" style={{marginRight:'1rem'}} >Home</Link>
                <Link to="/color" style={{marginRight:'1rem'}} >Color</Link>
                <Link to="/fetch" style={{marginRight:'1rem'}}>Fetch</Link>
                <Link to="/social" style={{marginRight:'1rem'}}>Social</Link>


         
        </>
    )
}

export { Header };
