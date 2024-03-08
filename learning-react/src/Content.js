import React from 'react'
import { Controlled_Inputs } from './Controlled-Inputs';
import Color_show from './Color_show';
import FetchApi from './fetchAPI/FetchApi';
import Social from './socialMedia/Social';
import { Route, Routes} from 'react-router-dom'


// -------------   Main Content Component -------------
export const Content = () => {



    return (
        <>

            <Routes>
                <Route path='/' element={<Controlled_Inputs />}></Route>
                <Route path='/color' element={<Color_show />}></Route>
                <Route path='/fetch' element={<FetchApi />}></Route>
                <Route path='/social' element={<Social />}></Route>
            </Routes>



        </>
    )
}
