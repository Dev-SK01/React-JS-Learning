import React from 'react'
import { Controlled_Inputs } from './Controlled-Inputs';
import { Footer } from './Footer';




// -------------   Main Content Component -------------
export const Content = () => {


    return (
        <>
            <Controlled_Inputs />
            {/* calling the footer component */}
            {/* prop drilling expianed */}
            <Footer react="Footer Division" />
        </>
    )
}
