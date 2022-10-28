import React from "react";
import PropTypes from "prop-types";
import MatchCard from "../MatchCard";
import { Box, Avatar } from "@chakra-ui/react";

function CountrySection({
  countryName,
  countryLogo,
  matches = [],
  finishedOnly,
}) {
  function sortMatchesByStatus(a, b) {
    if (isNaN(+a.match_status)) return 1;
    if (isNaN(+b.match_status)) return -1;

    if (a.match_status === "HT") return +b.match_status < 46 ? 1 : -1;
    if (b.match_status === "HT") return +a.match_status > 45 ? 1 : -1;
    return +a.match_status - +b.match_status;
  }

  return (
    <>
      <Box bg="primary" w="100%" borderRadius="6px" p={4} color="white">
        <Avatar src={countryLogo} size="xs" name={countryName} ml={-1} mr={2} />
        <strong>{countryName}</strong>
      </Box>
      {matches.sort(sortMatchesByStatus).map((match) => (
        <MatchCard
          key={match.match_id}
          match={match}
          finishedOnly={finishedOnly}
        />
      ))}
    </>
  );
}

CountrySection.defaultProps = {
  finishedOnly: false,
};

CountrySection.propTypes = {
  countryName: PropTypes.string,
  countryLogo: PropTypes.string,
  matches: PropTypes.arrayOf(PropTypes.object),
  finishedOnly: PropTypes.bool,
};

export default CountrySection;
