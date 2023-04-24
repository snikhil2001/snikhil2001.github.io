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
        count_private={true}
      />
      <Image
        m="auto"
        mt="20px"
        src="https://github-readme-activity-graph.cyclic.app/graph?username=snikhil2001&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true&width=100vh"
      />
      <Image
        id="github-top-langs"
        w="40%"
        m="auto"
        mt="20px"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=snikhil2001&bg_color=0D1117&color=5BCDEC&hide_border=true&width=100vh"
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
          id="github-streak-stats"
          m="auto"
          mt={5}
          src="https://github-readme-streak-stats.herokuapp.com/?user=snikhil2001&hide_border=true&theme=react&hide_border=true&bg_color=0D1117"
        />
        <Image
          id="github-stats-card"
          m="auto"
          mt={5}
          src="https://github-readme-stats.vercel.app/api?username=snikhil2001&hide_border=true&theme=react&hide_border=true&bg_color=0D1117"
        />
      </Flex>
    </Box>
  );
}
