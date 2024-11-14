import { Box, Heading, Image } from "@chakra-ui/react";

const CardHome = ({ title, onClick }) => {
  return (
    <Box
      onClick={onClick}
      as="div"
      position="relative"
      w="200px"
      cursor="pointer"
    >
      <Box
        as="div"
        width="200px"
        bg="#424242"
        height="400px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="/assets/placeholder.png"
          alt="placeholder"
          position="absolute"
          top="120px"
        />
        <Heading as="p">{title}</Heading>
      </Box>
      <Box as="div" width="200px" bg="white" marginTop="5px">
        <Heading
          as="p"
          fontSize="15px"
          color="#424242"
        >{`Popular ${title}`}</Heading>
      </Box>
    </Box>
  );
};

export default CardHome;
