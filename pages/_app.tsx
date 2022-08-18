import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {ChakraProvider,extendTheme, Toast} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ChakraDrawer from '../components/chakra/Drawer'
import Navbar from '../components/Navbar'
import siteinfo from '../data/siteinfo.json'
import { motion } from 'framer-motion'
const theme= extendTheme({
  colors:{
    brand:{
      100:'#212121',
      900:'#111111',
      text:'white',
      button:'green',
      light:{
        900:'white',
        text:'black'
      }
    }
  },
  styles:{
    global:{
      body:{
        transitionProperty:"all",
        transitionDuration:"normal"
      }
    }
  }
})

function MyApp({ Component, pageProps,router }: AppProps) {
  const [triggers,setTriggers]=useState({
    open:()=>{}
  })

  useEffect(()=>{
    document.title=siteinfo.landingpage.title;
  },[])
  return (
    <ChakraProvider theme={theme} >
            <Navbar drawer={triggers.open}/>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate"
        variants={{
          pageInitial:{
            opacity:0,
            x:-10000
          },
          pageAnimate:{
            opacity:1,
            x:0
          }
        }}
        >
      <ChakraDrawer setTriggers={setTriggers} />
      <Component {...pageProps} />
      </motion.div>
    </ChakraProvider>
  )
}

export default MyApp
