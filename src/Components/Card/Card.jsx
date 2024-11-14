import { Box, Heading, Image } from "@chakra-ui/react";
import { openModal } from "../../Redux/Data/data.actions";

const Card = ({ src, title }) => {
  return (
    <Box
      as="div"
      width="250px"
      height="350px"
      display="flex"
      flexDir="column"
      justifyContent="end"
      alignItems="center"
      position="relative"
      transition="opacity 0.3s ease"
      _hover={{ opacity: 0.7, border: "2px solid white" }}
      backgroundColor="#424242"
    >
      <Image src={src} width="90%" height="95%" objectFit="cover" />

      <Heading
        position="absolute"
        color="white"
        as="p"
        fontSize="15px"
        cursor="pointer"
        backgroundColor="#424242"
        padding="5px"
        width="100%"
        textAlign="center"
        onClick={() => openModal({ title })}
      >
        {title}
      </Heading>
    </Box>
  );
};

export default Card;
