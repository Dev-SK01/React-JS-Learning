import React from "react";
import { useState } from "react";
import { Footer } from './Footer';


const itemCount = 2
const List_Keys = () => {
    // list and keys
    const [itemobj, setItem] = useState([
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

    function handlechange(id) {
        const list_item = itemobj.map((item) => (
            item.id === id ? { ...item, checked: !item.checked } : item
        ))

        setItem(list_item);
        // storing the to the local storage when the task completed
        localStorage.setItem('ListData' , JSON.stringify(list_item))
    }

    function handleDelete(id) {
        const list_item = itemobj.filter((item) => (
            item.id != id
        ))

        setItem(list_item);
         // storing the to the local storage when the task deleted
         localStorage.setItem('ListData' , JSON.stringify(list_item))
    }
    return (
        <>
            <section className='list-div'>
                <ul>
                    {/* empty data error message */}
                    {itemobj.length > 0
                        ?
                        (itemobj.map((item) => (
                            <li className='list-item' key={item.id}>
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
                        )))
                        : <p>Your List Is Empty</p>
                    }
                </ul>
            </section>
        </>
       
    )
}

export { List_Keys ,itemCount};