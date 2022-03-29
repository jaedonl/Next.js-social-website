// import { collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from "@firebase/firestore";
import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, SwitchHorizontalIcon, TrashIcon } from "@heroicons/react/outline";
// import { HeartIcon as HeartIconFilled, ChatIcon as ChatIconFilled } from "@heroicons/react/solid";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
import { useState, useEffect } from 'react'
// import Moment from "react-moment";
// import { useRecoilState } from "recoil";
// import { modalState, postIdState } from "../atoms/modalAtom";
// import { db } from "../firebase";

const Post = ({id, post, postPage}) => {

  // useEffect(() => {
  //   console.log(post)
  // }, [])

  return (
    <div className="p-3 flex cursor-pointer border-b border-[#EFF3F4]-700">        
        {!postPage && (
        <img src={post?.userImg} alt="user image" className="h-11 w-11 rounded-full mr-4" />
        )
        }

        <div className="flex flex-col space-y-2 w-full">
          <div className={`flex ${!postPage && "justify-between"}`}>
            {postPage && (
              <img src={post?.userImg} alt="Profile Picture" className="h-11 w-11 rounded-full mr-4" />
            )}
            <div className="text-[#999]">
              <div className="inline-block group">
                <h4 className={`font-bold text-[15px] sm:text-base text-[#333] group-hover:underline ${!postPage && "inline-block"}`}>
                  {post?.username}
                </h4>
                <span className={`text-sm sm:text-[15px] ${!postPage && "ml-1.5"}`}>@{post?.tag}</span>                
              </div>{" "}·{" "}

              <span className="hover:underline text-sm sm:text-[15px]">
                {/* <Moment fromNow>{post?.timestamp?.toDate()}</Moment> */}
              </span>
              {!postPage && (
                <p className="text-[#333] text-[15px] sm:text-base mt-0.5">{post?.text}</p>
              )}
            </div>

            <div className="icon group flex-shrink-0 ml-auto">
              <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
            </div>                    
          </div>
          
          {postPage && (
              <p className="text-[#333] text-[15px] sm:text-base mt-0.5">{post?.text}</p>
            )}
            {post.image && <img src={post?.image} alt="post image" className="rounded-2xl max-h-[700px] object-cover mr-2" /> }
            
        </div>
    </div>
  )
}

export default Post