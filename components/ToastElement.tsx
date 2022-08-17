export type toastProps={
    title:string,
    description:string,
    status:any,
    duration:number,
    isClosable:boolean,
    trigger?:any
}
import { useToast,Button } from "@chakra-ui/react"
import { useEffect } from "react"

const Toast = ({title,description,status,duration,isClosable,trigger}:toastProps) => {
    const toast=useToast()
    useEffect(()=>{
        trigger(toast)
    },[toast, trigger])

    const triggerToast = ()=>{
        toast({
            title:title,
            description:description,
            status:status,
            duration:duration,
            isClosable:isClosable
        })
    }

  return (
    <></>
  )
}

export default Toast