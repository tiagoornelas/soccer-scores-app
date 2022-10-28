import React, { useState } from "react";
import Live from "./Live";
import moment from "moment";
import Results from "./Results";
import { Spinner } from "@chakra-ui/react";
import { Center, Heading } from "@chakra-ui/react";
import DateSelector from "../../components/DateSelector";

function MatchesContainer() {
  const [date, setDate] = useState(
    moment().subtract(2, "day").format("YYYY-MM-DD")
  );

  return (
    <Center
      flexDir={{ base: "column", md: "row" }}
      gap={{ base: "48px", md: "0" }}
      mt="48px"
      w="100%"
      justifyContent="space-around"
      alignItems="flex-start"
    >
      <Center flexDir="column" w="100%">
        <Heading fontWeight="extrabold" color="red">
          Live
          <Spinner w={3} h={3} ml={3} mb={1} color="primary" />
        </Heading>
        <Live />
      </Center>
      <Center flexDir="column" w="100%">
        <DateSelector date={date} setDate={setDate} />
        <Results w="100%" date={date} />
      </Center>
    </Center>
  );
}

export default MatchesContainer;
