import React from 'react'
import { Controlled_Inputs } from './Controlled-Inputs';
import Color_show from './Color_show';
import FetchApi from './fetchAPI/FetchApi';



// -------------   Main Content Component -------------
export const Content = () => {


    return (
        <>
            <Controlled_Inputs />

            <Color_show />

            <FetchApi />
            {/* react router for social media */}
          

        </>
    )
}
