import type { NextPage } from 'next'
import Card from '../components/Card'
import { AvatarGroup, Heading, Kbd, Stack } from '@chakra-ui/react'
import styles from '../styles/Home.module.scss'
import SkillsCard from '../components/SkillsCard'
import { skilldata } from '../data/skillData'
import Toast, { toastProps } from '../components/ToastElement'
import { Image,Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import siteinfo from '../data/siteinfo.json'
import SocialLinkFav from '../components/SocialLinkFav'
import { socialLinksData } from '../data/sociallinkData'
import { baseURL, isProd } from '../helpers/preDeployChecks'
const data:toastProps={
  title:"Hello user!",
  description:"How are you",
  status:"success",
  duration:9000,
  isClosable:true

}

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <section id='welcome'>
      <motion.span style={{display:'flex',flexWrap:'wrap-reverse',alignItems:'center',justifyContent:'space-evenly'}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:1}}>
        <motion.span style={{margin:'12px',padding:'20px'}} transition={{delay:2}} initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}}>
          {siteinfo.sitename.split("").map((key,i)=>{
            if(key===" "){
              return " "
            }
            else{
              return(<Kbd key={i}>{key}</Kbd>)
            }
          })}
        </motion.span>
      <Image src={isProd?`${baseURL}/pirogrammer.jpg`:'/pirogrammer.jpg'} alt='programmer meme' sx={{
        maxWidth:['80%','30%'],
        // margin:'auto',
        borderRadius:'2%'

      }} shadow={'dark-lg'}></Image>
      </motion.span>
      </section>
      <section id='social-links' style={{padding:'12px'}}>
        <Heading pl={5} pb={5}>Social Links</Heading>
        <AvatarGroup p={5} sx={{justifyContent:'space-evenly',flexWrap:'wrap'}}>
        {socialLinksData.map((data,i)=>{
          return(
            <SocialLinkFav key={i} {...data}/>
          )
        })}
        </AvatarGroup>
      </section>
      {/* Intro section */}
      <section id='introduction'>
      <Heading pl={5}>Introduction</Heading>
      <Card {...siteinfo}/>
      </section>
      {/* skills section */}
      <section id='skills'>
      <Heading pl={5}>Skills</Heading>
      <Stack direction={['column','row']} width={['full','80%']} margin={'auto'} sx={{justifyContent:'space-around',alignItems:'center'}}>
      {skilldata.map((data,i)=>{
        return(
          <SkillsCard key={i} {...data}/>
        )
      })}
      </Stack>
      </section>
      {/* Toast for notification */}
      <Toast {...data} trigger={(toast:any)=>{toast({...data})}}/>
    </div>
  )
}

export default Home
