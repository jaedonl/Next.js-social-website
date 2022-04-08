import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PostPage = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  
  return (
    <div>
      <h1>hihi</h1>
    </div>
  )
}

export default PostPage