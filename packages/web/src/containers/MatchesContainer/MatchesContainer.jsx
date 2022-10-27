import React from "react";
import Live from "./Live";
import { Center, Heading } from "@chakra-ui/react";

function MatchesContainer() {
  return (
    <Center
      flexDir={{ base: "column", md: "row" }}
      mt="48px"
      w="100%"
      justifyContent="space-around"
    >
      <Center flexDir="column">
        <Heading fontWeight="extrabold" color="primary">
          Ao vivo
        </Heading>
        <Live />
      </Center>
      <Center flexDir="column">
        <Heading fontWeight="extrabold" color="primary">
          Resultados
        </Heading>
        <Live />
      </Center>
    </Center>
  );
}

export default MatchesContainer;
