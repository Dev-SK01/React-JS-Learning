import React from 'react'
import './social.css';

const Post = ({Posts}) => {
  return (
    <>
    <h1>Posts</h1>
    <section className='posts'>
        { Posts.length > 0 ?
          (Posts.map((post) => (
            <div className='post' key={post.id}>
              <p className='title'>{post.title}</p>
              <p className='body'>{post.body}</p>
              <button>Delete</button>
            </div>
            )))
          : <p>No Posts Found</p>

        }
      </section>
    </>
  )
}

export default Post