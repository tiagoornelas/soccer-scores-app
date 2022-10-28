import React from "react";
import MatchCard from "./MatchCard";
import { screen } from "@testing-library/react";
import { render } from "../../utils/helpers/testing";

jest.mock();
describe("<MatchCard>", () => {
  function setup() {
    render(
      <MatchCard
        match={{
          match_id: "1150728",
          country_id: "5",
          country_name: "Italy",
          league_id: "204",
          league_name: "Serie D - Group I",
          match_date: "2022-10-26",
          match_status: "11",
          match_time: "10:00",
          match_hometeam_id: "21870",
          match_hometeam_name: "Trapani",
          match_hometeam_score: "0",
          match_awayteam_name: "Paterno",
          match_awayteam_id: "4965",
          match_awayteam_score: "0",
          match_hometeam_halftime_score: "0",
          match_awayteam_halftime_score: "0",
          match_hometeam_extra_score: "",
          match_awayteam_extra_score: "",
          match_hometeam_penalty_score: "",
          match_awayteam_penalty_score: "",
          match_hometeam_ft_score: "",
          match_awayteam_ft_score: "",
          match_hometeam_system: "",
          match_awayteam_system: "",
          match_live: "1",
          match_round: "3",
          match_stadium: "Stadio Polisportivo Provinciale (Trapani)",
          match_referee: "",
          team_home_badge: "",
          team_away_badge:
            "https://apiv3.apifootball.com/badges/4965_paterno.jpg",
          league_logo:
            "https://apiv3.apifootball.com/badges/logo_leagues/204_serie-d.png",
          country_logo:
            "https://apiv3.apifootball.com/badges/logo_country/5_italy.png",
          league_year: "2022/2023",
          fk_stage_key: "321",
          stage_name: "Group I",
        }}
      />
    );
  }

  it("should render the MatchCard component correctly with right props", () => {
    setup();
    expect(screen.getByTestId("match_time")).toHaveTextContent("11");
    expect(screen.getByTestId("home_team")).toHaveTextContent("Trapani");
    expect(screen.getByTestId("away_team")).toHaveTextContent("Paterno");
    expect(screen.getByText("0 : 0")).toBeInTheDocument();
  });
});
