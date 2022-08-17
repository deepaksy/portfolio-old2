import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Radio, RadioGroup, Stack, useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Theme from "../../helpers/theme"
import  {navbarlinks} from '../../data/navbarlinks'
import siteinfo from '../../data/siteinfo.json'

function PlacementExample({setTriggers}:any) {

  const {sitename} = siteinfo
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isdark,setIsDark]=useState(false)
    useEffect(()=>{
      setTriggers({open:onOpen})
      localStorage?.getItem('theme')==='dark'?setIsDark(true):setIsDark(false)
      console.log("first")
    },[onOpen, setTriggers])
    return (
      <>
        <Drawer  placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>{sitename}</DrawerHeader>
            <DrawerBody >
              <Stack sx={{flexGrow:1}}>
                <Theme classname="theme" flag={true}/>
                {navbarlinks.map(({title,link},i)=>{
                  return(
                    <Link href={link} key={i}><Button>{title}</Button></Link>
                  )
                })}
              </Stack>
              <DrawerFooter sx={{position:'absolute',bottom:0,left:0,right:0,alignItems:'center',justifyContent:'center'}}>{sitename+" "}{new Date().getFullYear()+"-"+(new Date().getFullYear()+1)}</DrawerFooter>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default PlacementExample