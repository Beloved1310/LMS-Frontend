import {React,useState} from 'react'
import {
  Flex,
  Box,
  FormControl,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router"
import lms2_logo from '../assets/lms2_logo.png';
import lms_logo from '../assets/lms_logo.png';

const Login = () => {
  const [status] = useState(true)
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    // const navigate = useNavigate()
  return (
    <>
      <Flex
      h={'100vh'}
      >
      <Box 
      position='absolute'
      top='10'
      left='14'
      display={['none', 'block']}
      >
        <Image src={lms2_logo} alt="Logo" boxSize="40px" objectFit="contain" />
      </Box>
      <Box 
      position='absolute'
      top='8'
      left='8'
      display={['block', 'none']}
      >
        <Image src={lms_logo} alt="Logo" boxSize="40px" objectFit="contain" />
      </Box>
      <Box
      bg={useColorModeValue('#197DDA', '#197DDA')}
      w={['100%','48%']}
      display={['none', 'flex']}
      alignItems="center"
      >
      <Stack 
      px={['4', '16']}
      color={'white'}
      >
        <Text as='b' fontSize={['3xl', '4xl']} my={0} py={0} spacing={1} style={{lineHeight:'1.2'}}>Learn Web3 the <br />right way</Text>
        <Text fontSize='xl'>Join millions of learners in the Web3 space</Text>
      </Stack>
      </Box>

      <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={['100%','52%']}
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      px={18}>

          <Box w={['100%', '60%']}>
          <Stack textAlign={['center', 'start']} mb='10'>
            <Heading fontSize={'3xl'} >Log In to your account</Heading>
            <Text fontSize={'md'} color={'gray.600'}>Don't have an account? <NavLink to="/register" style={{color:'#197DDA'}}> Create an Account</NavLink></Text>
          </Stack>

          <FormControl id="email">
            <Input
              type="email"
              value={user["email"]}
              placeholder="Enter Email Address"
              onChange={(e) => setUser({...user, email: e.target.value})}
              disabled={!status ? true : false}
              required
            />
          </FormControl>
          <FormControl id="password">
            <Input
              my='4'
              type="password"
              value={user["password"]}
              placeholder="Enter Password"
              onChange={(e) => setUser({...user, password: e.target.value})}
              disabled={!status ? true : false}
              required
            />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Checkbox color={'gray.600'}>Remember me</Checkbox>
              <Link color={'#197DDA'}>Forgot password?</Link>
            </Stack>

            <Button
              loadingText="Loading"
              bg={'#197DDA'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Continue
            </Button>
            <Text fontSize='md' color={'gray.600'} textAlign={'center'} >By continuing you agree to our <span style={{color:'#197DDA'}}>Terms and Conditions </span>
            and consent to its <span style={{color:'#197DDA'}}>Privacy Policy</span>
          </Text>
          </Stack>
          </Box>
          
      </Box>
      </Flex>
    </>
  )
}

export default Login