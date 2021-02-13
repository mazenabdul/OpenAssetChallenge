import React from 'react'
import Comments from './Comments'

const PostItem = ({ post }) => {
  return (
    <div class="card text-white mt-2 mb-3">
      <div className="card-header text-center">
        <h3 className='mt-2'>Title: {post.title}</h3>
        <p className='text-center text-primary'>Author: {post.author.name}</p>
      </div>
      <p className='card-body bg-dark'>
        <p>{post.body}</p>
        <Comments />
      </p>
    </div>
  )
}

export default PostItem
