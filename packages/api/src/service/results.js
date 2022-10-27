import axios from "axios";
import moment from "moment";
import {
  API_FOOTBALL_BASE_URL,
  GET_EVENTS,
  MATCH_LIVE,
  SINGLE_DATE_RANGE_REPLACEABLE,
  WIDGET_KEY,
  TIMEZONE,
  DETAILS,
} from "../utils/constants/service.js";
import { hasEventsOnDate } from "../model/results.js";
// import { groupMatchesByCountry } from "../utils/helpers/payload.js";

function filterByStatus(matches) {
  return matches.filter((match) =>
    ["Finished", "After Pen."].includes(match.match_status)
  );
}

async function shouldPopulateDatabase(date) {
  if (moment(date, "YYYY-MM-DD").isBefore(moment(), "day")) {
    const response = await hasEventsOnDate(date);
    return !response;
  }
  return true;
}

async function fetchPastMatchesByDate(date) {
  return axios
    .get(
      `${API_FOOTBALL_BASE_URL}${GET_EVENTS}${MATCH_LIVE}${SINGLE_DATE_RANGE_REPLACEABLE.replaceAll(
        "[DATE]",
        date
      )}${WIDGET_KEY}${TIMEZONE}${DETAILS}`
    )
    .then((res) => filterByStatus(res.data));
}

export { fetchPastMatchesByDate, shouldPopulateDatabase };
