import axios from "axios";
import { groupMatchesByCountry } from "../utils/helpers/payload.js";
import {
  API_FOOTBALL_BASE_URL,
  GET_EVENTS,
  MATCH_LIVE,
  WIDGET_KEY,
  TIMEZONE,
  DETAILS,
} from "../utils/constants/service.js";

async function fetchLiveMatches() {
  return axios
    .get(
      `${API_FOOTBALL_BASE_URL}${GET_EVENTS}${MATCH_LIVE}${WIDGET_KEY}${TIMEZONE}${DETAILS}`
    )
    .then((res) => groupMatchesByCountry(res.data));
}

export { fetchLiveMatches, groupMatchesByCountry };
