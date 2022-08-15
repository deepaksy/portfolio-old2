import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Theme = ({classname}:{classname:string}) => {
    const [theme,setTheme]=useState("")
    const SetTheme = (theme:string) =>{
        document.documentElement.setAttribute('theme',theme);
        localStorage.setItem('theme',theme);
        setTheme(theme);
    }

    const toggleTheme = (theme:string) =>{
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
  return (
    <motion.div onClick={()=>toggleTheme(theme)}>
        <motion.span className={classname}>{theme==='dark'?'light':'dark'}</motion.span>
    </motion.div>
  )
}

export default Theme