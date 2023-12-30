import React, { useState } from 'react'
import './color-show.css'


function Color_show() {

 const[color , setColor] = useState('white');
 
 const [textColor , setTextColor] = useState('black')

function ControlColor() {
  (color ==  'white'  ||  color ==  'black') ? (textColor == 'black' ? setTextColor('white'): setTextColor('black')) : setTextColor(textColor);
}

  return (
   <>
   <section className='color-holder'>
    <div className="color-div" style={{backgroundColor:color}}>
      <p style={{color:textColor}}>{color}</p>
      <span style={{color:textColor}}>#{color}</span>
    </div>
    </section>
    <input 
      type="text"  
      id="color" 
      placeholder='Enter Color'
      className='color-input'
      value={color}
      onChange={(e) => (setColor(e.target.value)) }
    />
    <button
    onClick={ () => ControlColor()}
    >
    Toggle Color
    </button>
   </>
  )
}

export default Color_show