import React from 'react'
import './App.css'
import { List_Keys } from './List_Keys';
import { ExampleUSeState } from './Use_State';
import { Controlled_Inputs } from './Controlled-Inputs';
import { Footer } from './Footer';




// -------------   Main Content Component -------------
export const Content = () => {


    return (
        <>
            <Controlled_Inputs />
            {/* content data section components */}
            <section className='Content'>

                <ExampleUSeState />
                <List_Keys />
            </section>
            <>
                {/* calling the footer component */}
                {/* prop drilling expianed */}
                <Footer react="Items" />
           </>
        </>
    )
}
