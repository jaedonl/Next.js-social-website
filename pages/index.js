import axios from 'axios'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets';
import Feed from '../components/Feed';
import Login from '../components/Login';
import Modal from '../components/Modal';
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { getProviders, getSession, useSession } from "next-auth/react"
// getProviders() method returns the list of providers currently configured for sign in.
// useSession() React Hook in the NextAuth.js client is the easiest way to check if someone is signed in.
// getSession() method which can be called client or server side to return a session.

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session, status } = useSession()
  const [isOpen, setIsOpen] = useRecoilState(modalState);  

  if (!session) return <Login providers={providers} />
  return (
    <div className="">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/assets/logo2.png" />
      </Head>
      
      <main className="bg-[#fff] min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />

        <Widgets trendingResults={trendingResults} followResults={followResults} />

        {isOpen && <Modal />}        
      </main>
    </div>
  )
}

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
