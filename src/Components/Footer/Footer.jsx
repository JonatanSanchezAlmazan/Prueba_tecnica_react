import { Box, Heading, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { loading, error } = useSelector((state) => state.content);
  console.log(error);

  return (
    <Box
      as="footer"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      padding="20px"
      backgroundColor="#424242"
      width="100%"
      pos={!loading && !error ? "static" : "fixed"}
      bottom="0"
    >
      <Box as="div" width="100%">
        <Box as="ul" display="flex" gap="20px" padding="20px" flexWrap="wrap">
          <NavLink to="/">Home |</NavLink>
          <NavLink to="#">Terms and Conditions |</NavLink>
          <NavLink to="#">Privacy Policy |</NavLink>
          <NavLink to="#">Collections |</NavLink>
          <NavLink to="#">Help |</NavLink>
          <NavLink to="#">Manage Acount</NavLink>
        </Box>
        <Box as="div" display="flex" padding="20px">
          <Heading fontSize="16px">
            Copyright © 2024 Demo Streaming Jonatan Sanchez{" "}
          </Heading>
        </Box>
        <Box
          as="div"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap="20px"
        >
          <Box
            as="div"
            width="30%"
            display="flex"
            gap="20px"
            alignItems="center"
            padding="20px"
          >
            <Box as="div" width="20px" height="20px">
              <Image
                width="100%"
                height="100%"
                objectFit="contain"
                src="/assets/social/facebook-white.svg"
              />
            </Box>
            <Box as="div" width="20px" height="20px">
              <Image
                width="100%"
                height="100%"
                objectFit="contain"
                src="/assets/social/twitter-white.svg"
              />
            </Box>
            <Box as="div" width="20px" height="20px">
              <Image
                src="/assets/social/instagram-white.svg"
                width="100%"
                height="100%"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box
            as="div"
            width="50%"
            display="flex"
            gap="20px"
            justifyContent="end"
            alignItems="center"
          >
            <Box as="div" width="150px" height="150px">
              <Image
                src="/assets/store/app-store.svg"
                width="100%"
                height="100%"
                objectFit="contain"
              />
            </Box>
            <Box as="div" width="150px" height="150px">
              <Image
                src="/assets/store/play-store.svg"
                width="100%"
                height="100%"
                objectFit="contain"
              />
            </Box>
            <Box as="div" width="120px" height="120px">
              <Image
                src="/assets/store/windows-store.svg"
                width="100%"
                height="100%"
                objectFit="contain"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
