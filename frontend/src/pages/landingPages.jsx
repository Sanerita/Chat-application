import { Box, Flex, Input, Button, Image, Stack, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
// import { useMediaQuery } from "@chakra-ui/react";

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
      zIndex="-1"


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
          colorScheme="246E58"
          mr={4}
          bg="#246E58"
          onClick={handleSignInClick}
          cursor="pointer"
          size={isSmallerThan768 ? "sm" : "md"} // Adjust button size for smaller screens
        >
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