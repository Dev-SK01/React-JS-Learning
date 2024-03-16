import React from 'react'
import { Controlled_Inputs } from './Controlled-Inputs';
import Color_show from './Color_show';
import FetchApi from './fetchAPI/FetchApi';
import Social from './socialMedia/Social';
import Newpost from './socialMedia/Newpost'
import Post from './socialMedia/Post';
import { Route, Routes } from 'react-router-dom'
import Home from './socialMedia/Home';
import { DataProvider } from './context/DataContext';

// -------------   Main Content Component -------------
export const Content = () => {

    // setting the post 

    return (
        <>
            <DataProvider>
                <Routes>
                    <Route path='/' element={<Controlled_Inputs />}></Route>
                    <Route path='/color' element={<Color_show />}></Route>
                    <Route path='/fetch' element={<FetchApi />}></Route>
                    {/* nested route for social */}
                    <Route path='/social' element={<Social />}>
                        <Route path='post'
                            element={<Post />}
                        />
                        <Route path='createpost'
                            element={<Newpost />}
                        />
                        <Route index
                            element={<Home />}
                        />
                    </Route>
                </Routes>

            </DataProvider>

        </>
    )
}
