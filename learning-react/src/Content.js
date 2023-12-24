import React from 'react'
import { useState } from 'react';
import './App.css'


export const Content = () => {

    function textChange() {
        const textList = ['Grow', 'Give'];
        const index = Math.floor(Math.random() * 2);
        // calling the state functions
        setText(textList[index]);
        setPerson('You');
    }

    function handleClick(event) {
        console.log(event.target);
        alert('Hello React Dev ^_^');
    }
    //  changing the text 
    const [initText, setText] = useState('Earn');
    const [person , setPerson] = useState('Me');

    return (
        <section className='Content'>
            <p className='Text'>Let's {initText} Money With {person} !</p> <button onClick={textChange}>Change Text</button>
            <button onClick={(event) => handleClick(event)}>SayHi):</button>
        </section>
    )
}
