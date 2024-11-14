import { Box, Heading } from "@chakra-ui/react";
import CardHome from "../CradHome/CardHome";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <Box as="section" height="100%">
        <Heading as="h5" fontSize="20px" padding="20px" bg="#424242">
          Popular Titles
        </Heading>
      </Box>
      <Box
        as="main"
        padding="20px"
        display="flex"
        flexWrap="wrap"
        justifyContent="start"
        alignItems="start"
        gap="20px"
        height="100%"
        minHeight="80svh"
      >
        <CardHome onClick={() => handleClick("/series")} title="Series" />
        <CardHome onClick={() => handleClick("/movies")} title="Movies" />
      </Box>
    </>
  );
};

export default Main;
