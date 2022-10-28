import { GiSoccerKick } from "react-icons/gi";
import { Center, Heading, Highlight } from "@chakra-ui/react";

function Header() {
  return (
    <Center h="48px">
      <Heading
        size="xl"
        color="primary"
        style={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <GiSoccerKick style={{ marginRight: "8px" }} />
        <Highlight
          query="soccer"
          rounded="full"
          color="red"
          styles={{
            rounded: "full",
            color: "red",
            fontWeight: "bold",
          }}
        >
          livesoccerscores
        </Highlight>
      </Heading>
    </Center>
  );
}

export default Header;
