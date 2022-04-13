import React from 'react'

const Comment = ({id, comment}) => {
  return (
    <div>
      <h1>{id}</h1>
      <h1>{comment.comment}</h1>
    </div>
  )
}

export default Comment