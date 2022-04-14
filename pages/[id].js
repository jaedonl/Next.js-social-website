import { collection, doc, onSnapshot, orderBy, query } from "@firebase/firestore";
import { getProviders, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Head from "next/head";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import Post from "../components/Post";
import Comment from "../components/Comment";
import Login from "../components/Login";
import { db } from "../firebase";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import axios from 'axios'

const PostPage = ({trendingResults, followResults, providers}) => {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [post, setPost] = useState()
  const [comments, setComments] = useState([]);
  const router = useRouter()
  const { id } = router.query

  useEffect(() => 
    onSnapshot(doc(db, "posts", id), (snapshot) => {
      setPost(snapshot.data())
    }), [db]
  )

  useEffect(() => 
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs)        
      }
    ), [db, id]
  )

  if (!session) return <Login providers={providers} />
  return (
    <div className="">
      <Head>
        <title>{post?.username} on Twitter: "{post?.text}"</title>
        <link rel="icon" href="/assets/logo2.png" />
      </Head>
      
      <main className="bg-[#fff] min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <div className="flex-grow border-l border-r border-[#EFF3F4]-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
          <div className="flex items-center px-1.5 py-2 border-b border-[#EFF3F4]-700 text-[#333] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-[#fff]">
            <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0" onClick={() => router.back()}>
              <ArrowLeftIcon className="h-5 text-[#333]" />
            </div>

            <h1>Tweet</h1>
          </div>

          <Post id={id} post={post} postPage />
          {comments.length > 0 && (
            <div className="pb-72">
              {comments.map((comment) => (
                <Comment key={comment.id} id={comment.id} comment={comment.data()} />
              ))}
            </div>
          )}
        </div>

        {/* <Widget /> */} 

        {isOpen && <Modal />}        
      </main>
    </div>
  )
}

export default PostPage

export const getServerSideProps = async (context) => {
  const resTrending = await axios.get(`https://jsonkeeper.com/b/NKEV`)
  const trendingResults = resTrending.data

  const resFollowing = await axios.get("https://jsonkeeper.com/b/WWMJ")
  const followResults = resFollowing.data

  const providers = await getProviders()
  const session = await getSession(context) 
    

  return { 
    props: { 
      trendingResults, 
      followResults,
      providers,
      session, 
    } 
  }
}