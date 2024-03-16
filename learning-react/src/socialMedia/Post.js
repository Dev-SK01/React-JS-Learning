import React, { useContext } from 'react'
import './social.css';
import DataContext from '../context/DataContext';

const Post = () => {
  const {posts ,handleSearch,deletePost} =useContext(DataContext);
  return (
    <>
      <h1>Posts</h1>

      <form onSubmit={(e) => (e.preventDefault())}>
        <input
          type='text'
          required
          id='search'
          placeholder='Search Posts....'
          onChange={handleSearch}
        />
      </form>
      <section className='posts'>
        {posts.length > 0 ?
          (posts.map((post) => (
            <div className='post' key={post.id}>
              <p className='title'>{post.title}</p>
              <p className='body'>{post.body}</p>
              <button onClick={(e)=>(deletePost(post.id))}>Delete</button>
            </div>
          )))
          : <p>No Posts Found</p>

        }
      </section>
    </>
  )
}

export default Post