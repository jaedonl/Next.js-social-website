import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/assets/logo2.png" />
      </Head>
      
      <main className="bg-[#fff] min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar/>
        <Feed/>
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  )
}
