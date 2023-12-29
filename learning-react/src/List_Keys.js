import React from "react";




const List_Keys = ({ItemObj,handleDelete,handlechange}) => {
   


    return (
        <>
            <section className='list-div'>
                <ul>
                    {/* empty data error message */}
                    {ItemObj.length > 0
                        ?
                        (ItemObj.map((item) => (
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
                        // showing the error message if there is no list
                        : <p>Your List Is Empty</p>
                    }
                </ul>
            </section>
        </>

    )
}

export { List_Keys };