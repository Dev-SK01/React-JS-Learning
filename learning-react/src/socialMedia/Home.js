import React from 'react'

const Home = ({ posts , handleSearch }) => {
    return (
        <>

            <form onSubmit={(e) => (e.preventDefault())}>
                <input
                    type='text'
                    required
                    id='search'
                    placeholder='Search Posts....'
                    onChange={handleSearch}
                />
            </form>
            <section className='home'>
                {posts.length > 0 ?
                    (posts.map((post) => (
                        <div className='post' key={post.id}>
                            <p className='title'>{post.title}</p>
                            <p className='body'>{(post.body).length <= 25 ? post.body : `${((post.body).slice(0, 25))}....`}</p>
                        </div>)))
                    :
                    <p>No Posts Found</p>

                }
            </section>
        </>
    )
}

export default Home