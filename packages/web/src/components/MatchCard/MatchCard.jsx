import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { Flex, Center, Text, Avatar } from "@chakra-ui/react";

function MatchCard({ match, finishedOnly }) {
  const {
    match_status,
    match_date,
    match_hometeam_name,
    match_hometeam_score,
    match_hometeam_ft_score,
    match_awayteam_name,
    match_awayteam_score,
    match_awayteam_ft_score,
    team_home_badge,
    team_away_badge,
  } = match;

  const homeScore = finishedOnly
    ? match_hometeam_ft_score
    : match_hometeam_score;
  const awayScore = finishedOnly
    ? match_awayteam_ft_score
    : match_awayteam_score;

  return (
    <Flex w="100%" gap="4px" h="48px">
      <Center w="10%">
        {finishedOnly ? (
          <Text fontWeight="bold" data-testid="match_date">
            {moment(match_date, "YYYY-MM-DD").format("DD/MM")}
          </Text>
        ) : (
          <Text fontWeight="bold" color="red" data-testid="match_time">
            {match_status}
          </Text>
        )}
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
        <Text
          textAlign="center"
          data-testid="home_team"
          fontWeight={+homeScore > +awayScore ? "bold" : "regular"}
        >
          {match_hometeam_name}
        </Text>
      </Center>
      <Center w="10%" fontWeight="bold" color="primary">
        <Text
          fontWeight="bold"
          fontSize={{ base: "md", md: "xl" }}
          color="primary"
        >
          {homeScore}
          {" : "}
          {awayScore}
        </Text>
      </Center>
      <Center w="30%">
        <Text
          textAlign="center"
          data-testid="away_team"
          fontWeight={+homeScore < +awayScore ? "bold" : "regular"}
        >
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

MatchCard.defaultProps = {
  finishedOnly: false,
};

MatchCard.propTypes = {
  match: PropTypes.object,
  finishedOnly: PropTypes.bool,
};

export default MatchCard;
