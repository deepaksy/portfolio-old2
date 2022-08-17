import { Box, Button } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Link from "next/link"
import { navbarlinks } from "../data/navbarlinks"
import Theme from "../helpers/theme"
import styles from '../styles/components/Navbar.module.scss'
import {HamburgerIcon} from '@chakra-ui/icons'
import siteinfo from '../data/siteinfo.json'


const Navbar = ({drawer}:any) => {

  const {sitename}=siteinfo
  return (
    <motion.nav initial={{y:-100}} animate={{y:0}} >
        <Box className={styles.navbarContainer}>
        <Link href="/"><span id="logo" className={styles.logo}>{sitename}</span></Link>
        <ul
        className={styles.navbarLinksContainer}
        >
          {
            navbarlinks.map(({title,link},i)=>{
              return(
                <Link href={link} key={i}><li className={styles.navbarLinks} key={i}><Button>{title}</Button></li></Link>
              )
            })
          }
        </ul>
        <Theme classname={styles.themeButton}/>
        <Button sx={{display:['inherit','inherit','none'],margin:'0px 12px'}} onClick={()=>drawer()}><HamburgerIcon/></Button>
        </Box>
    </motion.nav>
  )
}

export default Navbar