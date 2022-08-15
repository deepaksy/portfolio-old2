import type { NextPage } from 'next'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import siteinfo from '../data/siteinfo.json'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const {landingpage}=siteinfo
  useEffect(()=>{
    document.title=landingpage.title;
  },[landingpage])
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default Home
