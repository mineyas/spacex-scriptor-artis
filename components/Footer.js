import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () =>{
    return (
        <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/yasmine-kharroubi-7a46891a3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created <span className={styles.little}> "(not originally)"</span>   by{' '} 
          <span>
            <Image src="/fox.png" alt="fox emoji" width={50} height={50} />
          </span>
        </a>
      </footer>
    );
}

export default Footer