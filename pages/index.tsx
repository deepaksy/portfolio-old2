import type { NextPage } from 'next'
import { useEffect } from 'react'
import siteinfo from '../data/siteinfo.json'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const {landingpage}=siteinfo
  useEffect(()=>{
    document.title=landingpage.title;
  },[])
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  )
}

export default Home
