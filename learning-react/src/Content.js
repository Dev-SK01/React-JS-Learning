import React from 'react'
import { useState } from 'react';
import './App.css'
import { Footer } from './Footer';

// ---------  Examples of UseState --------
const Usestate = () => {

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

const List_Keys = () => {
    const [itemobj , setItem] = useState([
        {
            id: 1,
            checked: false,
            data: 'Test Item'
        },
        {
            id: 2,
            checked: true,
            data: 'Test Item'
        }
    ])
       
    function handlechange(id){
        const list_item = itemobj.map((item) => (
            item.id === id ? {...item , checked :!item.checked} : item 
        )) 

        setItem(list_item);
    }

    function handleDelete(id){
        const list_item = itemobj.filter((item) => (
            item.id != id
        )) 

        setItem(list_item);
    }
    return (
        <section className='list-div'>
            <ul>
                {itemobj.map((item) => (
                    <li className='list-item' key={item.key}>
                        <input type="checkbox" name="checkbox" id='checkbox' 
                        checked={item.checked} 
                        onChange={() => (handlechange(item.id))} />
                        <label htmlFor="checkbox" className='item-data'>
                            {item.data}
                        </label>
                        <button className='list-btn' 
                        onClick={() => (handleDelete(item.id))}> 
                        Delete</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

// -------------   Main Content Component -------------
export const Content = () => {


    return (
        <>
        <section className='Content'>
            <Usestate />
            <List_Keys />
        </section>
        <>
         <Footer length={List_Keys.length} react="Items"/>
        </>
        </>
    )
}
