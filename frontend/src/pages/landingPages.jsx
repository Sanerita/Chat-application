import { Box, Flex, Input, Button, Image, Stack, useMediaQuery, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Container} from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Login from '../components/Authentication/Login';
import SignUp from "../components/Authentication/SignUp";
// import toastImage from '../assets/TOAST-removebg-preview.png';
// import { Image } from '@chakra-ui/react'

const LandingPage = () => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

  const handleSearchClick = () => {
    // Add logic for when the search bar is clicked
    console.log("Search bar clicked!");
  };

  const handleSignInClick = () => {
    // Add logic for when the sign-in button is clicked
    console.log("Sign-in button clicked!");
  };


  return (
    <Container
      
      h="100vh"
      
    >
    {/* navbar */}
      <Flex
        position="fixed"
        top="0"
        left="0"
        right="0"
        alignItems="center"
        justifyContent="space-between"
        p={4}
        bg="rgba(136, 216, 192, 0.8)"
        zIndex="1"
        width="navbarWidth"
        height={isSmallerThan768 ? "60px" : "80px"}
      >
        <Box top="0" left="20" alignItems="center" >
          <Image
            src="./src/assets/TOAST-removebg-preview.png"
            alt="Logo"
            boxSize="10vh"
            maxW="60PX"
            maxH="60PX"
          />
        </Box>
        <Stack direction="row" display="flex" justifyContent="space-between" alignItems="center" gap="50" >

          {isSmallerThan768 ? (
            <Container onClick={handleSearchClick}>
              <FaSearch style={{ cursor: "pointer" }} ></FaSearch>
            </Container>
          ) : (
            <Input placeholder="Search..." mx="auto" />
          )}

        </Stack>
        <Button
          variant="outline"
          mr={4}
          bg="#246E58"
          onClick={handleSignInClick}
          cursor="pointer"
          size={isSmallerThan768 ? "sm" : "md"} // button size for smaller screens
        >
          Sign In as Guest
        </Button>
      </Flex >


      {/* sign in and sign up section */}
      <Stack direction={['column', 'row']} spacing={['5px', '160px']}justifyContent="center" alignItems="center" h="100vh">

    <Image 
     src='./src/assets/TOAST-removebg-preview.png'  
     boxSize='300px'
     objectFit='cover' 
     alt="Toast Image" 
     mb={4} 
     />     
        <Container       
          bg="white"
          borderRadius="1g"
          borderWidth="1px"
          display="flex"
          justifyContent="center"
          textColor="black"
           w={{ base: "70%", md: "auto" }}
          mx={{ base: "5%", md: "20px" }}
          mt={{ base: "40px", md: "0" }}
        >
          <Tabs variant='soft-rounded'
          >
            <TabList mb="1em" justifyContent="space-around" >
              <Tab width={{ base: "30vw", md: "30vh" }}> Login</Tab>
              <Tab width={{ base: "30vw", md: "30vh" }}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
          {/* Additional content */}
        </Container>
      </Stack >

    </Container>
  );
};

export default LandingPage;