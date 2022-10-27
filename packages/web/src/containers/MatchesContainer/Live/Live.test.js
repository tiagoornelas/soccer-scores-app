import React from "react";
import Live from "./Live";
import { screen } from "@testing-library/react";
import * as reactQuery from "@tanstack/react-query";
import { render } from "../../../utils/helpers/testing";

jest.spyOn(reactQuery, "useQuery").mockReturnValue({
  status: "success",
  data: [
    {
      match_id: "1132558",
      country_id: "19",
      country_name: "Azerbaijan",
      league_id: "58",
      league_name: "Birinci Dasta",
      match_date: "2022-10-26",
      match_status: "82",
      match_time: "07:00",
      match_hometeam_id: "12849",
      match_hometeam_name: "Sabail 2",
      match_hometeam_score: "2",
      match_awayteam_name: "SumQayit 2",
      match_awayteam_id: "1314",
      match_awayteam_score: "2",
      match_hometeam_halftime_score: "1",
      match_awayteam_halftime_score: "1",
      match_hometeam_extra_score: "",
      match_awayteam_extra_score: "",
      match_hometeam_penalty_score: "",
      match_awayteam_penalty_score: "",
      match_hometeam_ft_score: "",
      match_awayteam_ft_score: "",
      match_hometeam_system: "",
      match_awayteam_system: "",
      match_live: "1",
      match_round: "9",
      match_stadium: "ASCO Arena (Bakı (Baku))",
      match_referee: "",
      team_home_badge:
        "https://apiv3.apifootball.com/badges/12849_sbail-ii.jpg",
      team_away_badge:
        "https://apiv3.apifootball.com/badges/1314_sumqayit-ii.jpg",
      league_logo: "https://apiv3.apifootball.com/badges/logo_leagues/1",
      country_logo:
        "https://apiv3.apifootball.com/badges/logo_country/19_azerbaijan.png",
      league_year: "2022/2023",
      fk_stage_key: "568",
      stage_name: "Current"
    },
    {
      match_id: "1132559",
      country_id: "19",
      country_name: "Azerbaijan",
      league_id: "58",
      league_name: "Birinci Dasta",
      match_date: "2022-10-26",
      match_status: "41",
      match_time: "08:00",
      match_hometeam_id: "1308",
      match_hometeam_name: "Neftci Baku 2",
      match_hometeam_score: "0",
      match_awayteam_name: "Kapaz 2",
      match_awayteam_id: "27302",
      match_awayteam_score: "1",
      match_hometeam_halftime_score: "0",
      match_awayteam_halftime_score: "1",
      match_hometeam_extra_score: "",
      match_awayteam_extra_score: "",
      match_hometeam_penalty_score: "",
      match_awayteam_penalty_score: "",
      match_hometeam_ft_score: "",
      match_awayteam_ft_score: "",
      match_hometeam_system: "",
      match_awayteam_system: "",
      match_live: "1",
      match_round: "9",
      match_stadium:
        "Türk Hava Yolları Futbol Mərkəzi IV meydança (Bakı (Baku))",
      match_referee: "",
      team_home_badge:
        "https://apiv3.apifootball.com/badges/1308_neftci-ii.jpg",
      team_away_badge:
        "https://apiv3.apifootball.com/badges/27302_kapaz-ii.jpg",
      league_logo: "https://apiv3.apifootball.com/badges/logo_leagues/1",
      country_logo:
        "https://apiv3.apifootball.com/badges/logo_country/19_azerbaijan.png",
      league_year: "2022/2023",
      fk_stage_key: "568",
      stage_name: "Current"
    },
    {
      match_id: "1132560",
      country_id: "19",
      country_name: "Azerbaijan",
      league_id: "58",
      league_name: "Birinci Dasta",
      match_date: "2022-10-26",
      match_status: "86",
      match_time: "07:00",
      match_hometeam_id: "1306",
      match_hometeam_name: "Zaqatala",
      match_hometeam_score: "3",
      match_awayteam_name: "Shamakhi 2",
      match_awayteam_id: "1313",
      match_awayteam_score: "0",
      match_hometeam_halftime_score: "1",
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
      match_round: "9",
      match_stadium: "Şəhər stadionu (Zaqatala)",
      match_referee: "",
      team_home_badge: "https://apiv3.apifootball.com/badges/1306_zaqatala.jpg",
      team_away_badge: "https://apiv3.apifootball.com/badges/1313_amaxi-ii.jpg",
      league_logo: "https://apiv3.apifootball.com/badges/logo_leagues/1",
      country_logo:
        "https://apiv3.apifootball.com/badges/logo_country/19_azerbaijan.png",
      league_year: "2022/2023",
      fk_stage_key: "568",
      stage_name: "Current"
    },
    {
      match_id: "1132561",
      country_id: "19",
      country_name: "Azerbaijan",
      league_id: "58",
      league_name: "Birinci Dasta",
      match_date: "2022-10-26",
      match_status: "81",
      match_time: "07:00",
      match_hometeam_id: "1310",
      match_hometeam_name: "Qarabag 2",
      match_hometeam_score: "0",
      match_awayteam_name: "Imisli FK",
      match_awayteam_id: "18285",
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
      match_round: "9",
      match_stadium: "Binə qəsəbə stadionu (Binə)",
      match_referee: "",
      team_home_badge:
        "https://apiv3.apifootball.com/badges/1310_qaraba-ii.jpg",
      team_away_badge:
        "https://apiv3.apifootball.com/badges/18285_mil-muan.jpg",
      league_logo: "https://apiv3.apifootball.com/badges/logo_leagues/1",
      country_logo:
        "https://apiv3.apifootball.com/badges/logo_country/19_azerbaijan.png",
      league_year: "2022/2023",
      fk_stage_key: "568",
      stage_name: "Current"
    },
    {
      match_id: "1140004",
      country_id: "112",
      country_name: "Ukraine",
      league_id: "327",
      league_name: "Druha Liga",
      match_date: "2022-10-26",
      match_status: "79",
      match_time: "07:00",
      match_hometeam_id: "7813",
      match_hometeam_name: "Real Pharma",
      match_hometeam_score: "0",
      match_awayteam_name: "Zvyagel",
      match_awayteam_id: "27534",
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
      match_round: "10",
      match_stadium: "Stadion FSK Ivan (Odesa (Odessa))",
      match_referee: "",
      team_home_badge:
        "https://apiv3.apifootball.com/badges/7813_real-pharm.jpg",
      team_away_badge: "https://apiv3.apifootball.com/badges/27534_zvyahel.jpg",
      league_logo: "",
      country_logo:
        "https://apiv3.apifootball.com/badges/logo_country/112_ukraine.png",
      league_year: "2022/2023",
      fk_stage_key: "2324",
      stage_name: "Current"
    },
    {
      match_id: "1152107",
      country_id: "142",
      country_name: "Kosovo",
      league_id: "544",
      league_name: "Superliga",
      match_date: "2022-10-26",
      match_status: "41",
      match_time: "08:00",
      match_hometeam_id: "10251",
      match_hometeam_name: "KF Llapi",
      match_hometeam_score: "0",
      match_awayteam_name: "Dukagjini",
      match_awayteam_id: "10674",
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
      match_round: "12",
      match_stadium: "Stadiumi Zahir Pajaziti (Podujevë (Besiana, Podujevo))",
      match_referee: "",
      team_home_badge: "https://apiv3.apifootball.com/badges/10251_llapi.jpg",
      team_away_badge:
        "https://apiv3.apifootball.com/badges/10674_dukagjini.jpg",
      league_logo:
        "https://apiv3.apifootball.com/badges/logo_leagues/544_superliga.png",
      country_logo:
        "https://apiv3.apifootball.com/badges/logo_country/142_kosovo.png",
      league_year: "2022/2023",
      fk_stage_key: "1811",
      stage_name: "Current"
    },
    {
      match_id: "1154431",
      country_id: "1",
      country_name: "eurocups",
      league_id: "538",
      league_name: "UEFA Youth League - 2nd Round",
      match_date: "2022-10-26",
      match_status: "40",
      match_time: "08:00",
      match_hometeam_id: "10129",
      match_hometeam_name: "Galatasaray U19",
      match_hometeam_score: "1",
      match_awayteam_name: "Rukh Lviv U19",
      match_awayteam_id: "27893",
      match_awayteam_score: "2",
      match_hometeam_halftime_score: "1",
      match_awayteam_halftime_score: "2",
      match_hometeam_extra_score: "",
      match_awayteam_extra_score: "",
      match_hometeam_penalty_score: "",
      match_awayteam_penalty_score: "",
      match_hometeam_ft_score: "",
      match_awayteam_ft_score: "",
      match_hometeam_system: "",
      match_awayteam_system: "",
      match_live: "1",
      match_round: "",
      match_stadium: "NEF Stadyumu (İstanbul)",
      match_referee: "S. van der Eijk",
      team_home_badge:
        "https://apiv3.apifootball.com/badges/10129_galatasaray-u19.jpg",
      team_away_badge: "",
      league_logo:
        "https://apiv3.apifootball.com/badges/logo_leagues/538_uefa-youth-league.png",
      country_logo: "",
      league_year: "2022/2023",
      fk_stage_key: "4663",
      stage_name: "2nd Round"
    },
    {
      match_id: "1047493",
      country_id: "2",
      country_name: "intl",
      league_id: "706",
      league_name: "UEFA U17 Championship Qualification - Qualifying Round",
      match_date: "2022-10-26",
      match_status: "85",
      match_time: "07:00",
      match_hometeam_id: "21492",
      match_hometeam_name: "Belgium U17",
      match_hometeam_score: "3",
      match_awayteam_name: "Estonia U17",
      match_awayteam_id: "23758",
      match_awayteam_score: "1",
      match_hometeam_halftime_score: "1",
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
      match_round: "4",
      match_stadium: "Centrul de Fotbal Buftea Teren Natural (Buftea)",
      match_referee: "",
      team_home_badge:
        "https://apiv3.apifootball.com/badges/21492_belgium-u17.jpg",
      team_away_badge: "",
      league_logo: "",
      country_logo:
        "https://apiv3.apifootball.com/badges/logo_country/2_intl.png",
      league_year: "2022/2023",
      fk_stage_key: "5361",
      stage_name: "Qualifying Round"
    },
    {
      match_id: "1047494",
      country_id: "2",
      country_name: "intl",
      league_id: "706",
      league_name: "UEFA U17 Championship Qualification - Qualifying Round",
      match_date: "2022-10-26",
      match_status: "40",
      match_time: "08:00",
      match_hometeam_id: "23273",
      match_hometeam_name: "Albania U17",
      match_hometeam_score: "0",
      match_awayteam_name: "Wales U17",
      match_awayteam_id: "23416",
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
      match_round: "4",
      match_stadium: "Stadion Lako (Novigrad)",
      match_referee: "",
      team_home_badge:
        "https://apiv3.apifootball.com/badges/23273_albania-u17.jpg",
      team_away_badge:
        "https://apiv3.apifootball.com/badges/23416_wales-u17.jpg",
      league_logo: "",
      country_logo:
        "https://apiv3.apifootball.com/badges/logo_country/2_intl.png",
      league_year: "2022/2023",
      fk_stage_key: "5361",
      stage_name: "Qualifying Round"
    },
    {
      match_id: "1047495",
      country_id: "2",
      country_name: "intl",
      league_id: "706",
      league_name: "UEFA U17 Championship Qualification - Qualifying Round",
      match_date: "2022-10-26",
      match_status: "41",
      match_time: "08:00",
      match_hometeam_id: "23754",
      match_hometeam_name: "Croatia U17",
      match_hometeam_score: "2",
      match_awayteam_name: "Sweden U17",
      match_awayteam_id: "21937",
      match_awayteam_score: "1",
      match_hometeam_halftime_score: "2",
      match_awayteam_halftime_score: "1",
      match_hometeam_extra_score: "",
      match_awayteam_extra_score: "",
      match_hometeam_penalty_score: "",
      match_awayteam_penalty_score: "",
      match_hometeam_ft_score: "",
      match_awayteam_ft_score: "",
      match_hometeam_system: "",
      match_awayteam_system: "",
      match_live: "1",
      match_round: "4",
      match_stadium: "Stadion Veli Jože (Poreč)",
      match_referee: "",
      team_home_badge: "",
      team_away_badge: "",
      league_logo: "",
      country_logo:
        "https://apiv3.apifootball.com/badges/logo_country/2_intl.png",
      league_year: "2022/2023",
      fk_stage_key: "5361",
      stage_name: "Qualifying Round"
    },
    {
      match_id: "1139662",
      country_id: "152",
      country_name: "Ethiopia",
      league_id: "556",
      league_name: "Premier League",
      match_date: "2022-10-26",
      match_status: "83",
      match_time: "07:00",
      match_hometeam_id: "11576",
      match_hometeam_name: "Bahir Dar Kenema",
      match_hometeam_score: "2",
      match_awayteam_name: "Legetafo Legedadi",
      match_awayteam_id: "27529",
      match_awayteam_score: "0",
      match_hometeam_halftime_score: "1",
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
      match_round: "5",
      match_stadium: "Bahir Dar Stadium (Bahir Dar)",
      match_referee: "",
      team_home_badge:
        "https://apiv3.apifootball.com/badges/11576_bahardar.jpg",
      team_away_badge:
        "https://apiv3.apifootball.com/badges/27529_legetafo-legedadi.jpg",
      league_logo:
        "https://apiv3.apifootball.com/badges/logo_leagues/556_premier-league.png",
      country_logo:
        "https://apiv3.apifootball.com/badges/logo_country/152_ethiopia.png",
      league_year: "2022/2023",
      fk_stage_key: "1821",
      stage_name: "Current"
    },
    {
      match_id: "1159131",
      country_id: "68",
      country_name: "Korea Republic",
      league_id: "219",
      league_name: "K League 1 - Relegation Round",
      match_date: "2022-10-26",
      match_status: "54",
      match_time: "07:30",
      match_hometeam_id: "5166",
      match_hometeam_name: "Anyang",
      match_hometeam_score: "0",
      match_awayteam_name: "Suwon Bluewings",
      match_awayteam_id: "384",
      match_awayteam_score: "0",
      match_hometeam_halftime_score: "0",
      match_awayteam_halftime_score: "0",
      match_hometeam_extra_score: "",
      match_awayteam_extra_score: "",
      match_hometeam_penalty_score: "",
      match_awayteam_penalty_score: "",
      match_hometeam_ft_score: "",
      match_awayteam_ft_score: "",
      match_hometeam_system: "3-4-3",
      match_awayteam_system: "4-2-3-1",
      match_live: "1",
      match_round: "",
      match_stadium: "",
      match_referee: "Jong Hyeok Kim, South Korea",
      team_home_badge: "https://apiv3.apifootball.com/badges/5166_anyang.jpg",
      team_away_badge:
        "https://apiv3.apifootball.com/badges/384_suwon-bluewings.jpg",
      league_logo:
        "https://apiv3.apifootball.com/badges/logo_leagues/219_k-league-1.png",
      country_logo:
        "https://apiv3.apifootball.com/badges/logo_country/68_korea-republic.png",
      league_year: "2022",
      fk_stage_key: "7276",
      stage_name: "Relegation Round"
    },
    {
      match_id: "1159132",
      country_id: "68",
      country_name: "Korea Republic",
      league_id: "219",
      league_name: "K League 1 - Relegation Round",
      match_date: "2022-10-26",
      match_status: "56",
      match_time: "07:30",
      match_hometeam_id: "5160",
      match_hometeam_name: "Daejeon",
      match_hometeam_score: "1",
      match_awayteam_name: "Gimcheon Sangmu",
      match_awayteam_id: "5165",
      match_awayteam_score: "1",
      match_hometeam_halftime_score: "1",
      match_awayteam_halftime_score: "1",
      match_hometeam_extra_score: "",
      match_awayteam_extra_score: "",
      match_hometeam_penalty_score: "",
      match_awayteam_penalty_score: "",
      match_hometeam_ft_score: "",
      match_awayteam_ft_score: "",
      match_hometeam_system: "4-3-3",
      match_awayteam_system: "4-3-3",
      match_live: "1",
      match_round: "",
      match_stadium: "",
      match_referee: "Dong Jun Lee, South Korea",
      team_home_badge:
        "https://apiv3.apifootball.com/badges/5160_daejeon-hana-citizen.jpg",
      team_away_badge:
        "https://apiv3.apifootball.com/badges/5165_gimcheon-sangmu.jpg",
      league_logo:
        "https://apiv3.apifootball.com/badges/logo_leagues/219_k-league-1.png",
      country_logo:
        "https://apiv3.apifootball.com/badges/logo_country/68_korea-republic.png",
      league_year: "2022",
      fk_stage_key: "7276",
      stage_name: "Relegation Round"
    },
    {
      match_id: "1149152",
      country_id: "1",
      country_name: "eurocups",
      league_id: "538",
      league_name: "UEFA Youth League - Group Stage",
      match_date: "2022-10-26",
      match_status: "10",
      match_time: "08:30",
      match_hometeam_id: "10122",
      match_hometeam_name: "Club Brugge U19",
      match_hometeam_score: "0",
      match_awayteam_name: "FC Porto U19",
      match_awayteam_id: "10120",
      match_awayteam_score: "1",
      match_hometeam_halftime_score: "0",
      match_awayteam_halftime_score: "1",
      match_hometeam_extra_score: "",
      match_awayteam_extra_score: "",
      match_hometeam_penalty_score: "",
      match_awayteam_penalty_score: "",
      match_hometeam_ft_score: "",
      match_awayteam_ft_score: "",
      match_hometeam_system: "",
      match_awayteam_system: "",
      match_live: "1",
      match_round: "5",
      match_stadium: "The Nest (Roeselare (Roulers))",
      match_referee: "L. Cibelli",
      team_home_badge: "",
      team_away_badge:
        "https://apiv3.apifootball.com/badges/10120_porto-u19.jpg",
      league_logo:
        "https://apiv3.apifootball.com/badges/logo_leagues/538_uefa-youth-league.png",
      country_logo: "",
      league_year: "2022/2023",
      fk_stage_key: "4665",
      stage_name: "Group Stage"
    },
    {
      match_id: "1158647",
      country_id: "133",
      country_name: "World",
      league_id: "0",
      league_name: " World Cup Women U17 - Play Offs",
      match_date: "2022-10-26",
      match_status: "41",
      match_time: "08:00",
      match_hometeam_id: "8908",
      match_hometeam_name: "Nigeria U17 W",
      match_hometeam_score: "0",
      match_awayteam_name: "Colombia U17 W",
      match_awayteam_id: "30056",
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
      match_round: "",
      match_stadium: "",
      match_referee: "",
      team_home_badge: "",
      team_away_badge: "",
      league_logo: "",
      country_logo: "",
      league_year: "",
      fk_stage_key: "",
      stage_name: ""
    }
  ]
});

describe("<Live>", () => {
  function setup() {
    render(<Live />);
  }

  it("should render the Live component fetching live events", () => {
    setup();
    expect(reactQuery.useQuery).toHaveBeenCalled();
  });
});
