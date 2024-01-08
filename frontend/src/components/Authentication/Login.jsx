import { FormControl, FormLabel, VStack, Input, InputGroup, InputRightElement, Button, Show} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Login = () => {

     const [show, setShow] = useState(false); 
     const [email, setEmail] = useState();
     const [password, setPassword] = useState();

    const handleClick = ()=> setShow(!show)
    
    const submitHandler =() =>{};

    return (
        <VStack spacing="5px">


            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                placeholder='Enter your email address...'
                onChange={(e)=> setEmail(e.target.value)}
                />
            </FormControl>

               <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                <Input
                type={show? "text":"Password"}
                placeholder='Enter your Password...'
                onChange={(e)=> setPassword(e.target.value)}
                />

                <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick} bg="#88d8c0">

                   {show ? "hide" : "show"}
                </Button>
                </InputRightElement>
                </InputGroup>
            </FormControl>


            <Button
            bg="#88d8c0"
            width="100%"
            style={{marginTop: 15 }}
            onClick={submitHandler}
            >
             Login
            </Button>

        </VStack >
    )
}

export default Login
