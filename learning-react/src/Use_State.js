import { useState } from "react";
import React from "react";

// ---------  Examples of UseState --------
const ExampleUSeState = () => {

    function textChange() {
        const textList = ['Earn','Grow', 'Give'];
        const index = Math.floor(Math.random() * 2);
        // calling the state functions
        setText(textList[index]);
        setPerson('You');
    }

    function handleClick(event) {
        console.log(event.target);
        alert('Hello React Dev ^_^');
    }
    //  changing the text  USESTATE
    const [initText, setText] = useState('Earn');
    const [person, setPerson] = useState('Me');

    return (
        <>
            <p className='Text'>Let's {initText} Money With {person} !</p> <button onClick={textChange}>Change Text</button>
            <button onClick={(event) => handleClick(event)}>SayHi):</button>
        </>
    )
}


export {ExampleUSeState};