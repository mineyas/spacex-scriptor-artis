import Nav from "./Nav";
import Footer from "./Footer";
import styles from '../styles/Home.module.css'

const Layout = ({ children }) => {
    return ( 
        <div className={styles.container}>
            
            <Nav/>
            {children}
            <Footer/>
        </div>
       
     )
}
 
export default Layout;