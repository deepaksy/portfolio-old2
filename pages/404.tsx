import Link from "next/link"
import { useEffect, useState } from "react"
import { baseURL,isProd } from "../helpers/preDeployChecks"
import { motion } from "framer-motion"
const Error = () => {
    useEffect(()=>{
        document.title="Error Page"
    },[])
    const [isHover,setIsHover]=useState(false)

    function Enter(){
        setIsHover(true)
    }

    function Leave(){
        setIsHover(false)
    }
  return (
    <div style={{
        maxHeight:'100vh',
        height:'100vh',
        background: isProd?`url(${baseURL}/404.gif)`:`url(/404.gif)`,
        backgroundSize:'contain',
        backgroundRepeat:"no-repeat",
        backgroundColor:'#ffb800',
        backgroundPosition:'center',
        backgroundPositionY:'center',
        textAlign:'center',
    }}>
        <Link href="/"><motion.h1 animate={{
            rotate:[0,-16,0,16,0]
        }} transition={{repeat:Infinity,repeatType:'reverse',repeatDelay:1}} onMouseEnter={Enter} onMouseLeave={Leave} style={{margin:0,position:'absolute',top:'65px',left:0,right:0,cursor:'pointer',color:isHover?'aliceblue':'inherit',transform:isHover?'scale(0.8)':'none',transition:'all 0.3s ease-in-out'}}>Navigate Back to Home</motion.h1></Link>
        <div style={{
            margin:'auto',
            position:'absolute',
            bottom:0,
            left:0,
            right:0,
            padding:'12px',
            backdropFilter:'blur(20px)',
            borderStyle:'solid',
            borderWidth:'thin 0px 0px'
        }}>
            <motion.strong   style={{padding:'12px',color:"white"}}>Copyright © | Trademark Reserved. {`${new Date().getFullYear()}-${new Date().getFullYear()+1}`}</motion.strong >
        </div>
    </div>
  )
}

export default Error