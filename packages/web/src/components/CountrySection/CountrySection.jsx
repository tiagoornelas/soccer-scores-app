import React from "react";
import PropTypes from "prop-types";
import MatchCard from "../MatchCard";
import { Box, Avatar } from "@chakra-ui/react";

function CountrySection({ countryName, countryLogo, matches = [] }) {
  return (
    <>
      <Box bg="primary" w="100%" borderRadius="6px" p={4} color="white">
        <Avatar src={countryLogo} size="xs" name={countryName} ml={-1} mr={2} />
        <strong>{countryName}</strong>
      </Box>
      {matches.map((match) => (
        <MatchCard key={match.match_id} match={match} />
      ))}
    </>
  );
}

CountrySection.propTypes = {
  countryName: PropTypes.string,
  countryLogo: PropTypes.string,
  matches: PropTypes.arrayOf(PropTypes.object),
};

export default CountrySection;
