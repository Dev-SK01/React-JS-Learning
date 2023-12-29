import React from "react";




const List_Keys = ({ ItemObj, handleDelete, handlechange }) => {



    return (
        <>
            <section className='list-div'>
                <ul>
                    {/* empty data error message */}
                    {ItemObj.length > 0
                        ?
                        (ItemObj.map((item) => (
                            <li className='list-item' key={item.id}>
                                <div className="checkbox">
                                <input type="checkbox" name="checkbox" id='checkbox'
                                    checked={item.checked}
                                    onChange={() => (handlechange(item.id))} />
                                </div>
                                <label htmlFor="checkbox" className='item-data'>
                                    {item.data}
                                </label>
                                <button className='list-btn'
                                    onClick={() => (handleDelete(item.id))}>
                                    <i className="bi bi-shield-x"></i>
                                </button>
                            </li>
                        )))
                        // showing the error message if there is no list
                        :
                        <div className="empty-list">
                            <i className="bi bi-emoji-dizzy-fill"></i>
                            <p>Your List Is Empty</p>
                        </div>
                    }
                </ul>
            </section>
        </>

    )
}

export { List_Keys };