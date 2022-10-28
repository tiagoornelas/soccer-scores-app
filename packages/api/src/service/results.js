import axios from "axios";
import moment from "moment";
import {
  API_FOOTBALL_BASE_URL,
  WIDGET_KEY,
} from "../utils/constants/service.js";
import { hasEventsOnDate } from "../model/results.js";

async function shouldPopulateDatabase(date) {
  // Database should be populated if requested a past date with any matches on database
  // or if requesting today, when the finished matches will be upserted.
  // If by any means a future date is requested, it will populate the database with no events and
  // then return an empty array.
  if (moment(date, "YYYY-MM-DD").isBefore(moment(), "day")) {
    const response = await hasEventsOnDate(date);
    return !response;
  }
  return true;
}

async function fetchPastMatchesByDate(date) {
  return axios
    .get(API_FOOTBALL_BASE_URL, {
      params: {
        action: "get_events",
        match_live: 0,
        from: date,
        to: date,
        Widgetkey: WIDGET_KEY,
        timezone: "-03:00",
        withOutDetails: true,
      },
    })
    .then((res) => res.data);
}

export { fetchPastMatchesByDate, shouldPopulateDatabase };
