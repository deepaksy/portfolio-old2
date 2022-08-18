export type SocialLinksProps={link:string,name?:string,icon?:any}
import { Avatar} from "@chakra-ui/react"
import Link from "next/link"
const SocialLinkFav = ({link,name,icon}:SocialLinksProps) => {
  return (
        <Link target={'_blank'} href={link}>
            <Avatar size={['md','lg']} icon={icon} name={icon?"":name} bg={'gray.200'}></Avatar>
        </Link>
  )
}

export default SocialLinkFav