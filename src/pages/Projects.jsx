import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import kfc from "../Images/kfc.jpg";
import cult from "../Images/cult.jpg";
import hubspot from "../Images/hubspot.jpg";

export default function Projects() {
  return (
    <>
      <Center px={6} py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "80%", md: "1100px" }}
          height={{ sm: "600px", md: "22rem" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("#17252A", "#17252A")}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex flex={1} bg="blue.200">
            <Image objectFit="cover" boxSize="100%" src={kfc} />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={"4xl"} color="white" fontFamily={"body"}>
              KFC Clone
            </Heading>
            <Text fontWeight={600} color={"white"} size="sm" mb={4}>
              Individual Project
            </Text>
            <Text
              textAlign={"center"}
              color={useColorModeValue("white", "gray.400")}
              px={3}
            >
              It is an e-commerce website where one can purchase fast food and
              beverages from their nearest restaurants. As the name justifies,
              this website mainly deals in fried chicken.
            </Text>
            <Stack
              py={4}
              align={"center"}
              justify={"center"}
              direction={"row"}
              mt={6}
            >
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <Image
                  src="data:image/png;base64,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"
                  w="50px"
                />
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <Image
                  src="data:image/png;base64,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"
                  w="40px"
                  h="50px"
                />
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <Image
                  src="data:image/jpeg;base64,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"
                  w="50px"
                />
              </Badge>
            </Stack>

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"center"}
              gap={{ md: "120px", sm: "0px" }}
              alignItems={"center"}
            >
              <Link
                target="_blank"
                href="https://github.com/snikhil2001/tasteful-pump-9576"
              >
                <Button
                  w="10em"
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  Github
                </Button>
              </Link>

              <Link
                target="_blank"
                href="https://papaya-treacle-4fc14c.netlify.app/"
              >
                <Button
                  flex={1}
                  w="10em"
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Live/Deployed
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Center>
      <Center px={6} py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "80%", md: "1100px" }}
          height={{ sm: "600px", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("#17252A", "#17252A")}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex flex={1} bg="blue.200">
            <Image objectFit="cover" boxSize="100%" src={cult} />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={"4xl"} color="white" fontFamily={"body"}>
              Cultfit Clone
            </Heading>
            <Text fontWeight={600} color={"white"} size="sm" mb={4}>
              Collaborative Project
            </Text>
            <Text
              textAlign={"center"}
              color={useColorModeValue("white", "gray.400")}
              px={3}
            >
              It is a fitness-based website and one can also purchase a variety
              of fitness products on this platform.
            </Text>
            <Stack
              py={4}
              align={"center"}
              justify={"center"}
              direction={"row"}
              mt={6}
            >
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <Image
                  src="data:image/png;base64,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"
                  w="50px"
                />
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAELCAMAAAC77XfeAAAA8FBMVEX///8mTeQpZfHr6+sAAAASQ+OhrfEoW+woYO7v7+shSuQnZPH08+v4+PkOQeSzu+ienp4+XeWnseizs7OTk5MOW/AAO+Li4uI7OztCQkLDz/qpqalDdPK1xPkAOeIAPeIAV/AnUueJme7p7PyyvPP3+P56jOy9xfXU1+oAWfCnuvjf4/qbqPBvg+unsvLW2/masPfP1feOp/ZXcOhheOlkifSCk+11iOs9Xea6urrc3+r///lHZOVWgPPs8P3Z4vw7cPJddOmBkeeAnfXBx+lzhutQUFAwMDDY2NhmZmaPnOdyk/TL0Oq6welchPMAMuNS10b5AAAMRklEQVR4nO2de1vayhbGYz0xEDBWW7DHCwFFrYoXqlW323qpunuO7e7+/t9mB2QgmWStNbMyQ+R58v49hF8uK/My601wHA19/A+ixcGIVWzEh+FGPiEj/qtDo6uSvqQv6Uv6kr6kV6BfJ+l/vB36H398SGo1Rb8ujfjj7dD/lb2RT/JnpqU4ffZhShz79fdJ/S9F/1Ea8mFa9NlflPO6//SG6d/QPaekL+lL+pK+pLdO/+Mt0Gc7hcX360n9P0X/QRrxvgj6lLIdV5wt+3TNvx36Rdnzpo+97Jvf0LGfleueTf8m7jklfUlf0pf0Jb1F+tc1BWy2srqmQGv+43tYr+s58ipPXOvF0pcqVapUqVKlSpUqNetamGF1navAnVWF5865Pzercrec3Rmm7zkvbtEQbLld53h26YM9pxsUDcFW2HfWwqIh2GoeOiezS9+6dbabRUOw1XKcnVbREGz5kVWY2SvHv4roO7M6XfkPEf3NzNJfRvRHs0of2RzHuZjVydZdiOh7Num9ikF5yW0HmxG9VaPjvTMoiT5ci+j3bBodm/TNu4i+b/OGb5S+k9x2azuiP7RpFWzSNwd9PqtWwSa9O1xVmJkrJ7lp3xvS25ytbNKfDemXLeLbpD8a0ttcEzFJX0tuemgUHGfX4nRlkr4i0feG9DbXRCzSB90hvU2rYJI+yyjYtQo26U+G9Datgkn6TnLTze0hvU2rYJG+tTOkv7VoFWzSjxoQM0Kf3LLfGdHPyHUv0d+M6K/sTbYG6aWpdmQUHOdhFundixH95UzQZxsFx9myN9l672psSfTSZOUeiKYnRe+z5eWAr6H0I6PgUO2T8LrO1p96zeO4Nhs4fX80jmifBE/Vea5yPLx8KtF3klQjo+BQ7ZNgqRD6Rw+lHxkFx9nGJ1v3uBD6nxWUPhTjFgn6l0Lov0n0ElVnPBC/5/i79SLo5XuOBHUzHuih05V/Xgi9VLQy/fl44BlOf1ME/U47CS8bhd3xSKJ90imCfluil43Cy3gkYRWCIqr2ZB+nPx6PJNonzesC6NfwqTbYG4+krMJn9sHn06saBZtWgU8vGwW5cXI4HmnPKvDpvxBG4XY8kkha5LAKfHpVo0C2T3JYBT49YRTc2FC8anNYBT79PW4UlmNDUfg8VoFPL93uYaNAJS1yWAU2/aKyUbBoFdj0t4RR2IqNJZIWzenT3ykbBYtWgU3fJ4zCZmxsF6ePrAJT7DUFdaNAtk/c3hJTa5ROAPoDwijcxc8TsYzsBkzNNXC1vwD06kbBYvuEWsdsHAD0hFFoxcdaS1qQ9HsA/W/cKISJwYXR9wF6wihcJQbbWgOn6NuHAL2H058lBtsKZZL0twA9YXOeE4NtJS0o+n0AXsco2EtaEPS1CkB/SNAvJEbbSlpQ9PcAvWwUshMWQraSFgR95TdAv0cYhbXkaEtJC4r+J0BPGIXwLjHaVtKCoPdAo6DYOHmVLatA0ING4ZEwCknnbStpQdFvAvRfcXpXGl4QPWQUNvCp1pOGFzNb7d9lspONkzNpuKWkBUEPGgVpssqOYk5kKWlB0QO/e6nGyZY03lLSgqIHDj3VOOlJ4y0lLXB6ZaMgryh0pfFk0sIGfeUbQE80TiSj4DibdqwCQc81CvJKBPmgqo2ES+MRoFdNWAjdEVbhapml+w1M91yjsCONJ6yCuzLVfA5hFEJ5/CLR/GG2T5jrmBv4eshc6gPEWuAFbxmZSS+H0pIwsYSFEP6gqn80VXp8qk00Tl5lJ2nBo5eNgjzVXqQ+gbdPfGb7hEevaxRIq8Bsn/DoqYSFbBTo9gkLnkmvnrAQIpIWzWvWLZNH39VonIz2F7cK4a8p0lNGIb10SyUt/p4ivWoUcyIqabEyRXqdxsmrqKRFb4r0RMLCz/gIQf+ddcvk0StHMSeyYhV49MpRzImIpMXZ9OjVo5gTEVbBmx69ehRzIiJp4U6vanUSFkKEVQg58Dx6faMQ/Y6nciKcg8+i10lYjPeYiJSyrAKLXj2KORHRPuFZBRa9TsJCiGifBEv1aeVzCKPQzPoMYRX85xWGupuIoC4/wyiQj3r6jHdABm0km+PLq5FCWgkLIRyeJ2wdcx/KRTVw+ofMD9lIWmD0bXk1UohYD7nM/JCNpAVKn/6RMZRewkLIRtICpQcOPWUUFjI/ZSNpgdDXagC9ThRzIhtJC4S+sgHQU0Yh+1ZlI2mB0X8F6HWimLEzZiFpgdFDjROOUbCTtEDoG6cAPWUUsr0TlbTwgbwrdqPF6KG2jxzFlOhTjZOR8GPvHwFZY2yewOiZRkFOWAiRD6pm2sg6dqfF6KF8CLGiICcshPCkhf+Q/bu8ijWqEXowSKqZsBDCkxb+MkC/hNxpMXpFo0AlLISIV4L7AP3fTHqAQi+KORHRPmll/zSs/kLmCZi+9g6g0ItiTkRYBejpk2vkXoXQQ0ZBL4o5EZG0AB9UZdFzjUIqYTE+Z7wHVaus+z1sFDQTFkJE0gJ6ULWO3Glh+gYUJNVNWAhRSQvgQdU60qhG6CGjQCQsMtdDhuI9qFpHVp8ReuiJEyKK2QE+xn1Qtfodvlch9JBR0E5YCBFWAXhQtYqsPsP0oFGQihZ62VVavKRFdQU+Zwg9ECSlGifphIUQEcoEkhaYVYDpoSdOKKOQTlgIEVYBaJ9gVgGkr0E2vS+th8gvu4KMAhnKbK5m0yNWAaa/Bxh0o5gTcd9p8Q94xUH0tQYUJOUaBTppAVmFlUu/6WbuQRZ9rdJob3yBKPQTFkLcd1pU6/XPCw9hkN6DFH1EXnvcg4LrDt8o5EpaRL9v559elpuBn9gDL0m+3/56AB+8oXSjmBPlfKdFtAfXS7ud+EU0pq950eVyCl+0Y2lHMSci7pgKoczBRXR8HoSjPfDEhf7ucQ0+53ExEhZCRpIW0SmoPr3cNAdl4A0u9MbPTciUp6XxDgtZxt5pEe3B6tJ3r+W3v51CT8ZkipOwEDKatBhcRIqXy0SchIWQ8aSFJrvOy67SMh7K1O6VcxIWQsZDmdr0nITFeM9NhzK16TkJCyHjoUxteiqKiXgM86FMbXpOwkLIeChTm17jZVdpEcdeO5SpTU8YhWX0w8QauHYoU5ueaD1gRsF8KDMvvY5RIJMWnV+RA7NJL09WagkLIeqPxkL3aOW6XlXeAx36w4Pf+3LHTccoqCQt/KB5tfU0r7gHqvQ7a4+VdkO636QnKyBhIaSUtPDdIDw//lxXuIiU6E9ONyJy+a3lWfSoUdBIWvhus7O7RJ4Ckv5282cj66Bn06NGQS9p4ftB66aH1zFO3/9yDx30kTrJr0SNgn7SwnfxOobpoxptN+Q3FJH0KDzrnRZRHS9vPVUz9yCbPqrRGnK5xCR9FW4UuO+0iOq4mVnHGfRIjVL0QBRzIn4ucFDHF0uryVMg0RM1StJDCQuhXH80FtVxM6rj2CmI09M1StJnRzEnyh3KHNTx87iOBb1ajaakZxQMhTIHdfwymI+H9Oo1StJDCQshU6HM6BQEUR3/qVWjFD2YsBAyGcqM6tjf5x30kdQbJ68yHMrM+V8z6o2TVxkOZeak7yS31qIWcw2HMg3TU6bP8OuvzNJTRoFaVZgyfXJjSMJCyOwjBGbpKaNA/XvINOlrXkeihxMWQmZff8Wmr8jocwpGwXGei6dPHXRBDycshMy+/kqfXv5X8phIo2D69Vd69FmXS0ykUSDbJ9boocslTk83q8nXX9mgJw76SGAUcyKifWKeXuGgj4QkLISIPxozTI/UaAY9CW/4leAYvdrlEhdNb9bogNmoii45kbAQmjM5XWXS6x/0oVy8cfKqXqeVndIyQq9eoxJ60FqmJ6uBtrvnYWhmDzzpoLM2Mvh9vLunk9fovyy30OfAdOmZl4vvhs2zBSINlqXbvUsXiPpp0nNqdIgetDpba/x/27lbOGvluYi8PAc9POqqZ6oA7axd8Ou4wyIf1OhNTyGCp6aojpuG6phUVKOuXo2qqP9yZaKOCfKwdXbMqFEVmahjBD1oeXlqVEV56xggj26MBmpURYt56jhDZmtURdvHZuZj321pzqOmlLeOBzX6YKtGVXS7ya3j1xotjlxIv46jW3owpRpVUTQfz6nW8fRrVEWHCnVcXI2qqL8F1/Hgll5ojarotvscpOs4r9edpk56N7E6fmM1qiJRx2+zRlW03T262tJ+fkBH/wJYQQ+E/CHUTwAAAABJRU5ErkJggg=="
                  w="40px"
                  h="50px"
                />
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <Image
                  src="data:image/jpeg;base64,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"
                  w="50px"
                />
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7EITdIILyPG3p8RKmDmgAS_F0q6foFrZfTJzFk2ifQ&s"
                  w="50px"
                  h="50px"
                />
              </Badge>
            </Stack>

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"center"}
              gap={{ md: "120px", sm: "0px" }}
              alignItems={"center"}
            >
              <Link
                target="_blank"
                href="https://github.com/Sanket01Hiremath/dusty-hat-6390"
              >
                <Button
                  w="10em"
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  Github
                </Button>
              </Link>

              <Link
                target="_blank"
                href="https://spectacular-biscochitos-c217ff.netlify.app/"
              >
                <Button
                  flex={1}
                  w="10em"
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Live/Deployed
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Center>
      <Center px={6} py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "80%", md: "1100px" }}
          height={{ sm: "600px", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("#17252A", "#17252A")}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex flex={1} bg="blue.200">
            <Image objectFit="cover" boxSize="100%" src={hubspot} />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={"4xl"} color="white" fontFamily={"body"}>
              Hubspot Clone
            </Heading>
            <Text fontWeight={600} color={"white"} size="sm" mb={4}>
              Individual Project
            </Text>
            <Text
              textAlign={"center"}
              color={useColorModeValue("white", "gray.400")}
              px={3}
            >
              It is a platform where you can grow your business with their
              amazing tools
            </Text>
            <Stack
              py={4}
              align={"center"}
              justify={"center"}
              direction={"row"}
              mt={6}
            >
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <Image
                  src="data:image/png;base64,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"
                  w="50px"
                  h="50px"
                />
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <Image
                  src="data:image/jpeg;base64,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"
                  w="50px"
                  h="50px"
                />
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <Image
                  src="data:image/jpeg;base64,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"
                  w="50px"
                />
              </Badge>
              {/* <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7EITdIILyPG3p8RKmDmgAS_F0q6foFrZfTJzFk2ifQ&s"
                  w="50px"
                  h="50px"
                />
              </Badge> */}
            </Stack>

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"center"}
              gap={{ md: "120px", sm: "0px" }}
              alignItems={"center"}
            >
              <Link
                target="_blank"
                href="https://github.com/Sanket01Hiremath/dusty-hat-6390"
              >
                <Button
                  w="10em"
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  Github
                </Button>
              </Link>

              <Link
                target="_blank"
                href="https://spectacular-biscochitos-c217ff.netlify.app/"
              >
                <Button
                  flex={1}
                  w="10em"
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Live/Deployed
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </>
  );
}
