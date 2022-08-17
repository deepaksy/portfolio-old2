import {Skeleton,SkeletonCircle,SkeletonText, Stack} from '@chakra-ui/react'

import React, { useState } from 'react'

export const Skeletos = () => {
    const [isLoad,setIsLoad]=useState(false)
  return (
    <Stack >
        <button onClick={()=>isLoad?setIsLoad(false):setIsLoad(true)}>Toggle</button>
        <SkeletonCircle isLoaded={isLoad} size='20rem'/>
        <Skeleton isLoaded={isLoad} height="20px" w={800}/>
    </Stack>
  )
}

export default Skeletos