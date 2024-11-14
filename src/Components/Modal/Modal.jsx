import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { closeModal } from "../../Redux/Data/data.actions";
import { useSelector } from "react-redux";

const Modal = () => {
  const { item } = useSelector((state) => state.content);

  return (
    <>
      <Box
        as="div"
        width="100%"
        height="100%"
        position="fixed"
        top="0"
        opacity="0.98"
        backgroundColor="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          as="div"
          width="80%"
          height="80%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          gap="20px"
          padding="20px"
          bgColor="#424242"
          textAlign="center"
        >
          <Button
            onClick={() => closeModal()}
            color="black"
            fontSize="25px"
            position="absolute"
            top="0"
            right="0"
          >
            X
          </Button>
          <Heading as="h2" color="white">
            Title: {item.title}
          </Heading>
          <Image width="200px" src={item.images["Poster Art"].url} />
          <Heading as="p" fontSize="15px" color="white" maxW="700px">
            Description: {item.description}
          </Heading>
          <Heading as="p" fontSize="15px" color="white">
            Year: {item.releaseYear}
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default Modal;
