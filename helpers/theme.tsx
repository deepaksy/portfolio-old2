import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const Theme = ({classname, flag}:{classname:string,flag?:boolean}) => {
    const {colorMode,toggleColorMode}=useColorMode()
    const [theme,setTheme]=useState("")
    const SetTheme = (theme:string) =>{
        document.documentElement.setAttribute('theme',theme);
        localStorage.setItem('theme',theme);
        setTheme(theme);
    }

    const toggleTheme = (theme:string) =>{
        toggleColorMode()
        if(theme==='dark'){
            SetTheme("light")
        }
        else if(theme==='light'){
            SetTheme("dark")
        }
    }

    useEffect(()=>{
        localStorage?.getItem('theme')==='dark'?SetTheme('dark'):SetTheme('light')
    },[])
  if(flag){
    return (
        <Button   onClick={()=>toggleTheme(theme)} className={classname}>
           {theme} &nbsp; <motion.span style={{width:'min-content'}}  animate={{rotate:360}} transition={{repeat:Infinity,ease:'linear',duration:5}}  >
            {theme==='dark'?<SunIcon/>:<MoonIcon/>}
            </motion.span>
        </Button>

)
  }
  else{
    return (
        <Button  sx={{display:['none','none','flex']}} onClick={()=>toggleTheme(theme)} className={classname}>
            <motion.span style={{width:'min-content'}}  animate={{rotate:360}} transition={{repeat:Infinity,ease:'linear',duration:5}}  >
            {theme==='dark'?<SunIcon/>:<MoonIcon/>}
            </motion.span>
        </Button>

)
  }
}

export default Theme