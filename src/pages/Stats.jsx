import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

export default function Stats() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <Box m="auto" mt="50px">
      <Heading mt={5} mb={5}>
        My Stats
      </Heading>
      <GitHubCalendar
        style={{ margin: "auto" }}
        username="snikhil2001"
        transformData={selectLastHalfYear}
        hideTotalCount
        hideColorLegend
        blockSize={30}
        fontSize={20}
      />
      <Image
        m="auto"
        mt="20px"
        src="https://activity-graph.herokuapp.com/graph?username=snikhil2001"
      />

      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        {" "}
        <Image
          m="auto"
          mt={5}
          src="https://github-readme-stats.vercel.app/api?username=snikhil2001&show_icons=true"
        />
        <Image
          m="auto"
          mt={5}
          src="https://github-readme-streak-stats.herokuapp.com/?user=snikhil2001"
        />
      </Flex>
    </Box>
  );
}
