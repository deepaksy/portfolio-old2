export type SkillCardProps ={
  skillname:string,
  tags:{
    label:string,
    size:any
  }[]
}

import { Box, Button,Text, Heading,Stack,useColorModeValue, Tag, Avatar, TagLabel } from '@chakra-ui/react'
import React from 'react'
import Tags from './Tags'

const SkillsCard = ({skillname,tags}:SkillCardProps) => {
  return (
    <Box 
    maxW={['90%','23rem',]}
          w={['98%','full']}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'dark-lg'}
          rounded={['md','xs']}
          borderRadius={['3xl']}
          overflow={'hidden'}
    >
        <Box p={6} sx={{display:'flex',alignItems:'center'}} >
        <div style={{
            margin:'0px 12px',
            padding:'10px',
            borderRadius:'50%',
            borderStyle:'solid',
            borderWidth:'thin'
        }}><i className="fa-brands fa-react" style={{fontSize:'3rem'}}></i></div>
            <Stack direction={'column'}>
            <Stack
            direction={'column'}
            >
                <Heading as='p' size={['sm','lg','md']}>{skillname}</Heading>
            </Stack>
            <br/>
            <Stack
            direction={'row'}
            >
            {tags.map(({label,size},i)=>{
              return(<Tags key={i} label={label} size={size}/>)
            })}
            </Stack>
            </Stack>
          </Box>
    </Box>
  )
}

export default SkillsCard