import { useEffect } from "react";
import Header from "../../Components/Header/Header";
import { Box, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Card from "../../Components/Card/Card";

import Modal from "../../Components/Modal/Modal";
import Footer from "../../Components/Footer/Footer";
import { getContent } from "../../Redux/Data/data.actions";

const Series = () => {
  const { content, loading, error, isModal } = useSelector(
    (state) => state.content
  );
  console.log(content);

  useEffect(() => {
    getContent("series");
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
        minHeight="50svh"
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
        {content.map((serie, index) => (
          <Card
            key={index}
            src={serie.images["Poster Art"].url}
            title={serie.title}
          />
        ))}
      </Box>
      <Footer />
      {isModal && <Modal />}
    </>
  );
};

export default Series;
