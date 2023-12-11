import { Box, Flex, Input, Button, Image, Stack, useMediaQuery, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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
  const videoWidth = "100%";
  const videoHeight = isSmallerThan768 ? "100vh" : "100%";


  return (
    <Box
      position="relative"
      width="100%"
      height="100%"
      overflow="hidden"
    // zIndex="-1"


    >
      <video
        autoPlay
        muted
        loop
        style={{
          width: videoWidth,
          height: videoHeight,
          objectFit: "cover",
        }}
      >
        <source
          src="./src/assets/CHAT-WITH.mp4"
          type="video/mp4"
          quality="hd720"
        />
        Your browser does not support the video tag.
      </video>
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
            <Box onClick={handleSearchClick}>
              <FaSearch style={{ cursor: "pointer" }} />
            </Box>
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
        <Box
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
          top={{ base: "70%", md: "60%" }}
          mt={{ base: "-60px", md: "0" }}

        >
          <Text fontSize="4xl" fontFamily="Work sans" color="black">TOAST</Text>
        </Box>
        <Box
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
          top={{ base: "70%", md: "70%" }}
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
        </Box>
      </Stack >

    </Box >
  );
};

export default LandingPage;