import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  // Link,
} from "@chakra-ui/react";
import profile from "../Images/profpic.jpg";

import Resume from "../Images/Nikhil_Sahni_Resume.pdf";

export default function About() {
  return (
    <Stack
      id="home"
      className="about section"
      minH={{ lg: "60vh", sm: "auto", md: "auto", base: "auto" }}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} background="#" flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Hey
            </Text>
            <br />{" "}
            <Text id="user-detail-name" color={"blue.400"} as={"span"}>
              I am Nikhil
            </Text>
          </Heading>
          <Text
            id="user-detail-intro"
            fontWeight="bold"
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
          >
            Passionate Full Stack Web Developer.Motivated, enthusiastic
            professional who is ready to take on opportunities and face
            challenges.
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="center"
            spacing={4}
          >
            <a
              id="resume-button-2"
              href={Resume}
              download={"Nikhil_Sahni_Resume"}
            >
              {" "}
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Resume
              </Button>
            </a>
            {/* <Button rounded={"full"}>How It Works</Button> */}
          </Flex>
        </Stack>
      </Flex>
      <Flex align="center" justify="center" flex={1}>
        <Image
          id="home-img"
          borderRadius="40px"
          h="350px"
          w="300px"
          alt={"Login Image"}
          objectFit={"cover"}
          src={profile}
        />
      </Flex>
    </Stack>
  );
}
