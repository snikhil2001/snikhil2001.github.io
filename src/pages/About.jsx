import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box id="about" className="about section">
      <Heading
        textAlign={"center"}
        mt={{ base: "40px", md: "40px", sm: "0px" }}
        mb={{ md: "20px", sm: "20px" }}
      >
        About
      </Heading>
      <Flex
        w="90%"
        margin="auto"
        py={10}
        flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
        justifyContent={"space-between"}
      >
        <Box
          w={{ lg: "40%", md: "40%", sm: "100%", base: "100%" }}
          mb={{ lg: "0px", md: "0px", sm: "20px", base: "20px" }}
        >
          <Image
            borderRadius={"20px"}
            src="https://t4.ftcdn.net/jpg/01/35/92/85/360_F_135928597_xU5EzKq6vpOeXPX5vsbI48zfVVkSRlrF.jpg"
            w="100%"
          />
        </Box>
        <Box w={{ lg: "50%", md: "50%", sm: "100%", base: "100%" }}>
          <Text
            id="user-detail-intro"
            fontWeight="bold"
            fontSize={{ base: "md", lg: "25px" }}
            lineHeight={1.5}
            color={"gray.500"}
          >
            A passionate and competent Web Developer having hands on experience
            on MERN stack technologies like ReactJS, NodeJS,ExpressJS, and
            MongoDB, ready to learn new technologies and always excited to solve
            problems. I have been learning and building Web Apps from last 6
            months. Well versed in coding using JavaScript and its frameworks.
            Being from Non-CS background dream to be Web Developer was not easy
            but after journey at Masai School, I am confident about all skills
            essential in building Web Apps and loves to learn new things
            everyday.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
