import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
export default function Home() {
  return (
    <section className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is SPOTIFY</h1>
      <main>
        <Sidebar />
        {/* <Center/> */}
      </main>
      {/* <Player/> */}
    </section>
  )
}
