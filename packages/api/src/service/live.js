import axios from "axios";
import moment from "moment";
import { groupMatchesByCountry } from "../utils/helpers/payload.js";
import {
  API_FOOTBALL_BASE_URL,
  WIDGET_KEY,
} from "../utils/constants/service.js";

async function fetchLiveMatches() {
  const today = moment().format("YYYY-MM-DD");
  return axios
    .get(API_FOOTBALL_BASE_URL, {
      params: {
        action: "get_events",
        match_live: 1,
        from: today,
        to: today,
        Widgetkey: WIDGET_KEY,
        timezone: "-03:00",
        withOutDetails: true,
      },
    })
    .then((res) => res.data);
}

export { fetchLiveMatches, groupMatchesByCountry };
