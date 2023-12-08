import { Box, Flex, Input, Button, Image } from "@chakra-ui/react";
import React from "react";

const LandingPage = () => {
  const handleSearchClick = () => {
    // Add logic for when the search bar is clicked
    console.log("Search bar clicked!");
  };

  const handleSignInClick = () => {
    // Add logic for when the sign-in button is clicked
    console.log("Sign-in button clicked!");
  };

  return (
    <Box
      position="relative"
      width="100%"
      height="100%"
      overflow="hidden"
      zIndex="-1"

    >
      <video
        autoPlay
        muted
        loop
        style={{
          width: "100%",
          height: "100%",
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
      >
        <Box top="0" left="10" alignItems="center" justifyContent="space-between" bgSize="50p">
          <Image
            src="./src/assets/TOAST-removebg-preview.png"
            alt="Logo"
            boxSize="60px"
            maxW="60px"
            maxH="5060px"

          />

        </Box>
        <Box onClick={handleSearchClick}>

          <Input placeholder="Search..." mx="auto" />

        </Box>
        <Button variant="outline" mr={4} bg="#246E58" onClick={handleSignInClick}>
          Sign In as Guest
        </Button>
      </Flex >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      /* Additional styling for your content */
      >
        {/* Your landing page content goes here */}
        <h1>Landing Page</h1>
        {/* ... */}
      </Box>
    </Box >
  );
};

export default LandingPage;