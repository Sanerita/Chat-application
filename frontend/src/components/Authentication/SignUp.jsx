import { FormControl, FormLabel, VStack, Input, InputGroup, InputRightElement, Button, Show} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const SignUp = () => {

     const [show, setShow] = useState(false);
     const [name, setName] = useState(); 
     const [email, setEmail] = useState();
     const [confirmPassword, setConfirmPassword] = useState();
     const [password, setPassword] = useState();
     const [pic, setPic] = useState();

    const handleClick = ()=> setShow(!show)
    const postDetails = (pics) => {};
    const submitHandler =() =>{};

    return (
        <VStack spacing="5px">

            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                placeholder='Enter your Name...'
                onChange={(e)=> setName(e.target.value)}
                />
            </FormControl>

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

            <FormControl id='confirm-password' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                <Input
                type={show? "text":"confirmPassword"}
                placeholder='Confirm Password...'
                onChange={(e)=> setConfirmPassword(e.target.value)}
                />

                <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick} bg="#88d8c0">

                   {show ? "hide" : "show"}
                </Button>
                </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id='pic'>
                <FormLabel>Upload your Picture</FormLabel>
                <Input  
                type='file'
                p={1.5}
                accept='image/*'
                onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>

            <Button
            bg="#88d8c0"
            width="100%"
            style={{marginTop: 15 }}
            onClick={submitHandler}
            >
             Sign Up
            </Button>

        </VStack >
    )
}

export default SignUp
