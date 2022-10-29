import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { VStack, Container, SkeletonText } from "@chakra-ui/react";
import CountrySection from "../../../components/CountrySection";
import { BASE_URL } from "../../../utils/constants/service";

function Live() {
  const [liveMatches, setLiveMatches] = useState([]);
  const { status, data } = useQuery(
    ["liveMatches"],
    () =>
      axios.get(`${BASE_URL}/live`).then(
        ({
          data: {
            payload: { countries },
          },
        }) => countries
      ),
    {
      keepPreviousData: true,
      refetchInterval: 60000,
      staleTime: 60000,
    }
  );

  useEffect(() => {
    if (status === "success" && !!data) setLiveMatches(data);
  }, [status, data, setLiveMatches]);

  return (
    <Container w="100%">
      <VStack>
        <SkeletonText
          mt="8"
          noOfLines={12}
          spacing="8"
          w="100%"
          isLoaded={status === "success" && !!data}
        >
          {liveMatches.map((country) => (
            <CountrySection
              key={country.country_id}
              countryName={country.country_name}
              countryLogo={country.country_logo}
              matches={country.matches}
            />
          ))}
        </SkeletonText>
      </VStack>
    </Container>
  );
}

export default Live;
