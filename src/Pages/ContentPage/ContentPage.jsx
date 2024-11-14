import Modal from "../../Components/Modal/Modal";
import { useEffect } from "react";
import { getContent } from "../../Redux/Data/data.actions";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import { Box, Heading } from "@chakra-ui/react";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";

const ContentPage = ({ contentType }) => {
  const { content, loading, error, isModal } = useSelector(
    (state) => state.content
  );

  useEffect(() => {
    getContent(contentType);
  }, [contentType]);

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
        {content.map((item, index) => (
          <Card
            key={index}
            src={item.images["Poster Art"].url}
            title={item.title}
          />
        ))}
      </Box>
      <Footer />
      {isModal && <Modal />}
    </>
  );
};

export default ContentPage;
