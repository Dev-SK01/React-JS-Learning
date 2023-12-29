import React, { useState } from 'react'
import { List_Keys } from './List_Keys';
import './App.css'
import { ExampleUSeState } from './Use_State';

let ListData = [
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
];
// -------------------------------------------------------

function Controlled_Inputs() {

    // list and keys
    const [itemobj, setItem] = useState(ListData)

    function handlechange(id) {
        const list_item = itemobj.map((item) => (
            item.id === id ? { ...item, checked: !item.checked } : item))

        setItem(list_item);
        // storing the to the local storage when the task completed
        localStorage.setItem('ListData', JSON.stringify(list_item))
    }

    function handleDelete(id) {
        const list_item = itemobj.filter((item) => (
            item.id != id
        ))

        setItem(list_item);
        // storing the to the local storage when the task deleted
        localStorage.setItem('ListData', JSON.stringify(list_item))
    }
    // -----------------------------------------------

    //  Creating Add List component
    const AddListElement = () => {

        const [listItem, setListItem] = useState('')

        function setInputData(inputListData) {
            const id = ListData.length ? ListData[ListData.length - 1].id + 1 : 1;
            const NewListData = { id, checked: false, data: inputListData };
            const addListData = [...ListData, NewListData];
            ListData.push(NewListData);
            setItem(NewListData);
            console.log(ListData);
            localStorage.setItem('ListData', JSON.stringify(addListData));
        }

        function handleListSubmit(e) {
            e.preventDefault();
            const Listdata = listItem;
            console.log(Listdata)
            // adding the list to the ListData Object
            setInputData(Listdata)
            // clearing the input after list added
            setListItem('');
        }
// ------------------------------- Components -_-____________-
        return (
            <>
                <form className='List-form' onSubmit={handleListSubmit}>
                    {/* Input Field to get the list */}
                    <input
                        type="text"
                        autoFocus
                        id='list-input'
                        placeholder='Enter Your List To Add'
                        required
                        value={listItem}
                        onChange={(e) => (setListItem(e.target.value))}
                    />
                    <button
                        type='submit'

                    >
                        Add List
                    </button>
                </form>


            </>
        )
    }


    // Controlled Input Component
    return (
        <>
            {/* AddList Component */}
            <AddListElement />
            <section className='Content'>

                <ExampleUSeState />
                <List_Keys
                    ItemObj={itemobj}
                    handleDelete={handleDelete}
                    handlechange={handlechange} />

            </section>

        </>
    )
}

export { Controlled_Inputs, ListData };