import { Avatar, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Tags = ({label}:{size?:any,name?:string,label:string}) => {
  return (
    <Tag
    _hover={{
        color:'pink',
        backdropFilter:'brightness(80%)'
    }} 
    _active={{
        color:'green',
        backdropFilter:'brightness(40%)'

    }} size={'md'} sx={{padding:'.3rem .6rem',cursor:'pointer'}}>
    <TagLabel>{label}</TagLabel>
</Tag>
  )
}

export default Tags