import Head from 'next/head'
import Image from 'next/image'
// import Launch from './Launch'
import styles from '../styles/Home.module.css'




export default function Home({ spaceX }) {
  console.log('spaceX', spaceX);
  
  return (
      <Head>
        <title>SpaceX</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}
