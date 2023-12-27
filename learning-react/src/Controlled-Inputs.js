import React, { useState } from 'react'

function Controlled_Inputs() {

    //  Creating Add List component
    const AddListElement = () => {

        const [listItem , setListItem] = useState('')

        function handleListSubmit(e) {
            e.preventDefault();
            console.log(listItem)
            // clearing the input after list added
            setListItem('');
        }

        return (
            <>
                <form className='List-input'  onSubmit={handleListSubmit}>
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
        </>
    )
}

export { Controlled_Inputs };