import { Box, Heading, Stack, Text, Flex, Link } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Contact() {
  return (
    <Box mt={10} id="contact" p={10} background={"#3AAFA9"}>
      <Heading>Contact</Heading>
      <Stack mt={5} spacing={3}>
        <Text id="contact-phone" fontWeight={500}>
          Phone No :- +91 9981894696
        </Text>
        <Text id="contact-email" fontWeight={500}>
          Gmail :- nikhilsahni2001@gmail.com
        </Text>
        <Text fontWeight={500}>Address :- Neemuch, M.P.</Text>
        <Flex gap={10} pt={5} justify={"center"} align={"center"}>
          <Link
            id="contact-github"
            target="_blank"
            href="https://github.com/snikhil2001"
          >
            {" "}
            <BsGithub fontSize="2.5rem" />
          </Link>
          <Link
            id="contact-linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/nikhil-sahni-8a3562239/"
          >
            <BsLinkedin fontSize="2.5rem" />
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
}
