import styles from '../styles/Home.module.css'
import Image from 'next/image'

import Link from 'next/link'

const Nav = () =>{
    return (
        <nav className={styles.nav}>
            <h1 className={styles.title}>
                {/* Welcome to <a href="https://nextjs.org">Next.js!</a> */}
                Welcome to Scriptor-Artis Test
            </h1>
        

            <p className={styles.description}>
                We will have fun fetching some data
                {/* Get started by editing{' '}
                <code className={styles.code}>pages/index.js</code> */}
            </p>
            <div className={styles.linkContainer}>
                <Link href="/"><a className={styles.linkList} className={styles.btn} >Home sweet home</a></Link> 
                <Link href="/all-launch"><a className={styles.linkList} className={styles.btn} >Launches List</a></Link> 
                <Link href="/launches"><a className={styles.linkList} className={styles.btn} >All Launches Details</a></Link> 
                
            </div>
        </nav>
    );
}

export default Nav