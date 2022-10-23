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

export default function About() {
  return (
    <Stack id="about" minH={"100vh"} direction={{ base: "column", md: "row" }}>
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
            <Text color={"blue.400"} as={"span"}>
              I am Nikhil
            </Text>
          </Heading>
          <Text
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
            {/* <Button rounded={"full"}>How It Works</Button> */}
          </Flex>
        </Stack>
      </Flex>
      <Flex align="center" justify="center" flex={1}>
        <Image
          borderRadius="40px"
          h="300px"
          w="300px"
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://media-exp1.licdn.com/dms/image/D4D03AQGLe1FjeL9mBg/profile-displayphoto-shrink_200_200/0/1666458839081?e=1671667200&v=beta&t=J-KxWCHmZM-TlxhXpvyGFpA5MZNZNDbmiH1zwWwmWxg"
          }
        />
      </Flex>
    </Stack>
  );
}
