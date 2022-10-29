import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { VStack, Container, SkeletonText } from "@chakra-ui/react";
import CountrySection from "../../../components/CountrySection";
import { BASE_URL } from "../../../utils/constants/service";
function Results({ date }) {
  const [results, setResults] = useState([]);
  const { isLoading, isFetching, status, data } = useQuery(
    ["results", { date }],
    () =>
      axios.get(`${BASE_URL}/results`, { params: { date } }).then(
        ({
          data: {
            payload: { countries },
          },
        }) => countries
      ),
    {
      keepPreviousData: true,
      staleTime: 60000,
    }
  );

  useEffect(() => {
    if (status === "success" && !!data) setResults(data);
  }, [status, data, setResults]);

  return (
    <Container w="100%">
      <VStack>
        <SkeletonText
          mt="8"
          noOfLines={12}
          spacing="8"
          w="100%"
          isLoaded={!isFetching && !isLoading && status === "success" && data}
        >
          {results.map((country) => (
            <CountrySection
              key={country.country_id}
              countryName={country.country_name}
              countryLogo={country.country_logo}
              matches={country.matches}
              finishedOnly
            />
          ))}
        </SkeletonText>
      </VStack>
    </Container>
  );
}

Results.propTypes = {
  date: PropTypes.object.isRequired,
};

export default Results;
