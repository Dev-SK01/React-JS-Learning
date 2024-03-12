import React, { useState } from 'react'
import { Controlled_Inputs } from './Controlled-Inputs';
import Color_show from './Color_show';
import FetchApi from './fetchAPI/FetchApi';
import Social from './socialMedia/Social';
import Newpost from './socialMedia/Newpost'
import Post from './socialMedia/Post';
import { Route, Routes } from 'react-router-dom'
import Home from './socialMedia/Home';


// -------------   Main Content Component -------------
export const Content = () => {
const POSTS = [
    {
        userId: 1,
        id: 1,
        title: "are or do repels provide blacked out except option criticizes",
        body: "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the troubles so that the whole\nof our things are but they are the matter will happen to the architect"
    },
    {
        userId: 1,
        id: 2,
        title: "who is being",
        body: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of the pleasure; nor will there be any trouble to reject them; we shall not be open to them; we shall not be able to do so, but there is nothing."
    },
    {
        userId: 1,
        id: 3,
        title: "she repels troubles as if she were training, whoever she is",
        body: "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared"
    },
    {
        userId: 1,
        id: 4,
        title: "and he is blinded",
        body: "by rejecting any and often to gain pleasure but it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things"
    },
    {
        userId: 1,
        id: 5,
        title: "they don't know what they hate",
        body: "let him seek forgiveness for repudiation, but there are other things, or let him flee, but he is, but there is pleasure, we can all be pleasures; there is no pain, nor"
    },]
    const [posts, setPosts] = useState(POSTS || []);

    // search feature 
    function handleSearch(e) {
        const searchData = e.target.value.toLowerCase();
        const searchRes = POSTS.filter((post) => {
            console.log(post.body.indexOf(searchData));
            if ((post.title.indexOf(searchData) !== -1 || post.body.indexOf(searchData) !== -1) && (post.title.indexOf(searchData) !==0 || post.body.indexOf(searchData)  !== 0) ) {
                return post;
            }
        });
        if(searchRes.length){
            setPosts(searchRes);
        }else{
            setPosts(POSTS);
        }
    }
    // setting the post 

    return (
        <>

            <Routes>
                <Route path='/' element={<Controlled_Inputs />}></Route>
                <Route path='/color' element={<Color_show />}></Route>
                <Route path='/fetch' element={<FetchApi />}></Route>
                {/* nested route for social */}
                <Route path='/social' element={<Social />}>
                    <Route path='post'
                        element={<Post 
                            Posts={posts} 
                            handleSearch={handleSearch} 
                            />}
                    />
                    <Route path='createpost'
                        element={<Newpost 
                            setposts={setPosts} />}
                    />
                    <Route index
                        element={<Home 
                            posts={posts} 
                            handleSearch={handleSearch} />}
                    />
                </Route>
            </Routes>



        </>
    )
}
