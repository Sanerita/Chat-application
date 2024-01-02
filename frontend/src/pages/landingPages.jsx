import { Box, Flex, Input, Button, Image, Stack, useMediaQuery, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Container } from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Login from '../components/Authentication/Login';
import SignUp from "../components/Authentication/SignUp";



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
    <Container landingPage
      // position="relative"
      width="100%"
      height="100%"
    //   overflow="hidden"
    // zIndex="-1"
    
      h="100vh"
      // minW={100}
      // display="flex"
      
      // background="linear-gradient(-45deg, #fff, #1d1680, #269cc7, #fff)"
      // backgroundSize="400% 400%"
      // animation="gradient 10s ease infinite"
      // sx={{
      //   '@keyframes gradient': {
      //     '0%': {
      //       backgroundPosition: '0% 50%',
      //     },
      //     '50%': {
      //       backgroundPosition: '100% 50%',
      //     },
      //     '100%': {
      //       backgroundPosition: '0% 50%',
      //     },
      //   },
      // }}
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
      <Stack justifyContent="center" alignItems="center" zIndex="-1" >
        <Container
          position="absolute"
          display="flex"
          justifyContent="center"
          p={3}
          bg="white"
          m="5 50px 20px 20px"
          borderRadius="1g"
          borderWidth="1px"
          mx={{ base: "5%", md: "20px" }}
          width={{ base: "90%", md: "50%" }}
          top={{ base: "50%", md: "38%" }}
          mt={{ base: "-60px", md: "0" }}

        >
          <Text fontSize="4xl" fontFamily="Work sans" color="black">TOAST</Text>
        </Container>
        <Container
          bg="white"
          w="100%"
          p={4}
          borderRadius="1g"
          borderWidth="1px"
          position="absolute"
          display="flex"
          justifyContent="center"
          textColor="black"
          width={{ base: "90%", md: "50%" }}
          top={{ base: "70%", md: "45%" }}
          mx={{ base: "5%", md: "20px" }}
          mt={{ base: "40px", md: "0" }}
        >
          <Tabs variant='soft-rounded'
          >
            <TabList mb="1em" justifyContent="space-around">
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