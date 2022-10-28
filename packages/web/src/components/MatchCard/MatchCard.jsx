import PropTypes from "prop-types";
import { Flex, Center, Text, Avatar } from "@chakra-ui/react";

function MatchCard({ match }) {
  const {
    match_status,
    match_hometeam_name,
    match_hometeam_score,
    match_awayteam_name,
    match_awayteam_score,
    team_home_badge,
    team_away_badge,
  } = match;
  return (
    <Flex w="100%" gap="4px" h="48px">
      <Center w="10%">
        <Text fontWeight="bold" color="red" data-testid="match_time">
          {match_status}
        </Text>
      </Center>
      <Center w="10%">
        <Avatar
          src={team_home_badge}
          size="xs"
          name={match_hometeam_name}
          mx={2}
        />
      </Center>
      <Center w="30%">
        <Text textAlign="center" data-testid="home_team">
          {match_hometeam_name}
        </Text>
      </Center>
      <Center w="10%" fontWeight="bold" color="primary">
        <Text fontWeight="bold" fontSize="xl" color="primary">
          {match_hometeam_score}
          {" : "}
          {match_awayteam_score}
        </Text>
      </Center>
      <Center w="30%">
        <Text textAlign="center" data-testid="away_team">
          {match_awayteam_name}
        </Text>
      </Center>
      <Center w="10%">
        <Avatar
          src={team_away_badge}
          size="xs"
          name={match_awayteam_name}
          mx={2}
        />
      </Center>
    </Flex>
  );
}

MatchCard.propTypes = {
  match: PropTypes.object,
};

export default MatchCard;
