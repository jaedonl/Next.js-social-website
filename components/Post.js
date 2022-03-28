import React from 'react'

const Post = ({key, id, post}) => {
  return (
    <div>
        <h1>{key}</h1>
        <h1>{id}</h1>
        <h1>{post}</h1>
    </div>
  )
}

export default Post