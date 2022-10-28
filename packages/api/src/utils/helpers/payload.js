function groupMatchesByCountry(liveMatches) {
  return liveMatches
    .filter(({ match_status }) => match_status !== "Finished")
    .map((match) => ({
      ...match,
      match_status:
        match.match_status === "Half Time" ? "HT" : match.match_status,
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

function assureFinisehdMatchesOnly(matches) {
  try {
    return matches.filter(({ match_status }) =>
      ["Finished", "After Pen."].includes(match_status)
    );
  } catch (err) {
    console.error(
      "⛔ Failed to assure finished matches only! All matches will be returned..."
    );
    return matches;
  }
}

export { groupMatchesByCountry, assureFinisehdMatchesOnly };
