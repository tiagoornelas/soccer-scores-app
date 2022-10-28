import { semanticMatchStatusValues } from "../constants/payload.js";

function groupMatchesByCountry(matches) {
  return matches
    .map((match) => ({
      ...match,
      match_status:
        semanticMatchStatusValues[match.match_status] || match.match_status,
    }))
    .reduce((prev, curr) => {
      const { country_id, country_name, country_logo } = curr;

      if (prev.find((country) => country.country_id === country_id)) {
        const countryIndex = prev.findIndex(
          (country) => country.country_id === country_id
        );
        let temp = prev;
        temp[countryIndex].matches.push(curr);
        return temp;
      } else {
        return [
          ...prev,
          {
            country_id,
            country_name,
            country_logo,
            matches: [curr],
          },
        ];
      }
    }, []);
}

function filterFinished(matches) {
  return matches.filter(
    ({ match_status }) => semanticMatchStatusValues[match_status] !== "FT"
  );
}

function filterFuture(matches) {
  return matches.filter(
    ({ match_status }) =>
      semanticMatchStatusValues[match_status] !== "Not begun"
  );
}

export { groupMatchesByCountry, filterFinished, filterFuture };
