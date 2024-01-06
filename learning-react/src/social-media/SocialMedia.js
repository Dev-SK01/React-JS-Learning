import React from 'react'
import Header from './Header'
import NewPost from './NewPost'
import Feeds from './Feeds'
import Error from './Error'
import Footer from './Footer'


const SocialMedia = () => {
    return (
        <>
            <Header />
            <NewPost />
            <Feeds />
            <Error />
            <Footer />
        </>
    )
}

export default SocialMedia