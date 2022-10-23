// import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// const Links = ["About", "Projects", "Skills", "Contact Me"];
const Links = [
  { title: "About", path: "about" },
  { title: "Skills", path: "skills" },
  { title: "Projects", path: "projects" },
  { title: "Contact", path: "contact" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      zIndex={5}
      position="sticky"
      top="0"
      bg={useColorModeValue("#17252A", "#17252A")}
      px={4}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box
            borderRadius="10px"
            p="5px 20px"
            fontSize="20px"
            fontWeight="bold"
            color="#3AAFA9"
            border="1px double white"
          >
            Nikhil
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((el) => (
              <Button
                background={"#17252A"}
                color={"white"}
                _hover={{ color: "#3AAFA9", background: "white" }}
                key={el.title}
              >
                <Link smooth={true} duration={1000} to={el.path}>
                  {el.title}
                </Link>
              </Button>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src="data:image/jpeg;base64,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"
              />
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((el) => (
              <Box
                borderRadius="10px"
                fontSize="20px"
                fontWeight="bold"
                color="#3AAFA9"
                border="1px double white"
                key={el.title}
              >
                <Link to={el.path}>{el.title}</Link>
              </Box>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
