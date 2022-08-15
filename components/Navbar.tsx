import { motion } from "framer-motion"
import Link from "next/link"
import { navbarlinks } from "../data/navbarlinks"
import Theme from "../helpers/theme"
import styles from '../styles/components/Navbar.module.scss'
const Navbar = () => {
  return (
    <motion.nav className={styles.navbarContainer}>
        <span id="logo" className={styles.logo}>{"Amicus Global"}</span>
        <ul
        className={styles.navbarLinksContainer}
        >
          {
            navbarlinks.map(({title,link},i)=>{
              return(
                <Link href={link} key={i}><li className={styles.navbarLinks} key={i}>{title}</li></Link>
              )
            })
          }
        </ul>
        <Theme classname={styles.themeButton}/>
    </motion.nav>
  )
}

export default Navbar