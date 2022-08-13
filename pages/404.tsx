import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import errorGif from '../public/404.gif'
const Error = () => {
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
        background:'url(/404.gif)',
        backgroundSize:'contain',
        backgroundRepeat:"no-repeat",
        backgroundColor:'#ffb800',
        backgroundPosition:'center',
        backgroundPositionY:'center',
        textAlign:'center',
    }}>
        <Link href="/"><h1 onMouseEnter={Enter} onMouseLeave={Leave} style={{margin:0,position:'absolute',top:'65px',left:0,right:0,cursor:'pointer',color:isHover?'green':'inherit',transform:isHover?'scale(0.8)':'none',transition:'all 0.3s ease-in-out'}}>Navigate Back to Home</h1></Link>
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
            <strong style={{padding:'12px'}}>Copyright © | Trademark Reserved. {`${new Date().getFullYear()}-${new Date().getFullYear()+1}`}</strong>
        </div>
    </div>
  )
}

export default Error