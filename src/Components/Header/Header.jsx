import { NavLink } from "react-router-dom";
import "./Header.css";
import { Box, Heading } from "@chakra-ui/react";
const Header = () => {
  return (
    <Box
      as="header"
      padding="4"
      bg="#007DFE"
      color="white"
      width="100%"
      height="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      gap="40px"
    >
      <Heading as="h1">DEMO Streaming</Heading>
      <Box
        as="ul"
        display="flex"
        height="100%"
        alignItems="center"
        gap="30px"
        justifyContent="end"
      >
        <Box as="li" display="flex" justifyContent="end" gap="20px">
          <NavLink to="#">Login</NavLink>
        </Box>
        <Box as="li" display="flex" justifyContent="end" gap="20px">
          <NavLink className="linkBtn" to="#">
            Start you free trial
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
