import { Box } from "@chakra-ui/react";
import React from "react";

const landingPages = () => {
  return (
    <Box

      position="relative"
      top="0"
      left="0"
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

      <Box
        position="absolute"
        top="55%"
        left="50%"
        transform="translate(-50%, -50%)"
      /* Additional styling for your content */
      >
        {/* Your login page content goes here */}
        <h1>Landing Page</h1>
        {/* ... */}
      </Box>
    </Box>
  );
};

export default landingPages;
