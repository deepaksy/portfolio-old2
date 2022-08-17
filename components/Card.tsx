import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import { baseURL,isProd } from "../helpers/preDeployChecks"
import siteinfo from '../data/siteinfo.json'

  
  export default function SocialProfileWithImage({quote,sitename,designation}:{quote:string,sitename:string,designation:string}) {
    return (
      <Center py={6} width="100%">
        <Box
          maxW={['89%','23rem']}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
          alt='lsjf'
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={isProd?`${baseURL}/profile.jpg`:"/profile.jpg"}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6} >
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {sitename}
              </Heading>
              <Text color={'gray.500'}>{designation}</Text>
            </Stack>
  
            <Text>{quote}</Text>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Follow
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }