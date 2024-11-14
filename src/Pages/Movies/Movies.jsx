import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Heading } from "@chakra-ui/react";
import Header from "../../Components/Header/Header";
import Card from "../../Components/Card/Card";

import Modal from "../../Components/Modal/Modal";
import Footer from "../../Components/Footer/Footer";
import { getContent } from "../../Redux/Data/data.actions";

const Movies = () => {
  const { content, loading, error, isModal } = useSelector(
    (state) => state.content
  );

  useEffect(() => {
    getContent("movie");
  }, []);

  return (
    <>
      <Header />
      <Box as="section">
        <Heading as="h5" fontSize="20px" padding="20px" bg="#424242">
          Popular Titles
        </Heading>
      </Box>
      <Box
        as="section"
        width="100%"
        minH="80svh"
        bgColor="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="50px"
        padding="20px"
      >
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">Oops, something went wrong</p>}
        {content.map((movie, index) => (
          <Card
            key={index}
            src={movie.images["Poster Art"].url}
            title={movie.title}
          />
        ))}
      </Box>
      <Footer />
      {isModal && <Modal />}
    </>
  );
};

export default Movies;
