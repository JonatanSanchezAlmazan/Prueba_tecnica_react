import { Box, Heading } from "@chakra-ui/react";
import CardHome from "../CradHome/CardHome";
import { Route, Routes, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <Box as="section">
        <Heading as="h5" fontSize="20px" padding="20px" bg="#424242">
          Popular Titles
        </Heading>
      </Box>
      <Box
        as="main"
        bg="white"
        minHeight="50svh"
        padding="20px"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap="20px"
      >
        <CardHome onClick={() => handleClick("/series")} title="Series" />
        <CardHome onClick={() => handleClick("/movies")} title="Movies" />
      </Box>
    </>
  );
};

export default Main;
