import axios from "axios";
import moment from "moment";
import { jest } from "@jest/globals";
import { fetchPastMatchesByDate } from "./results";
import {
  API_FOOTBALL_BASE_URL,
  GET_EVENTS,
  MATCH_LIVE,
  SINGLE_DATE_RANGE_REPLACEABLE,
  WIDGET_KEY,
  TIMEZONE,
  DETAILS,
} from "../utils/constants/service";

jest.spyOn(axios, "get");

describe("Live Service", () => {
  const today = moment().format("YYYY-MM-DD");
  const tomorrow = moment().add(1, "day").format("YYYY-MM-DD");
  const yesterday = moment().subtract(1, "day").format("YYYY-MM-DD");

  it("calls axios function to fetch from external API", async () => {
    await fetchPastMatchesByDate(today);
    expect(axios.get).toHaveBeenCalledWith(
      `${API_FOOTBALL_BASE_URL}${GET_EVENTS}${MATCH_LIVE}${SINGLE_DATE_RANGE_REPLACEABLE.replaceAll(
        "[DATE]",
        today
      )}${WIDGET_KEY}${TIMEZONE}${DETAILS}`
    );
  });

  it("should check for shouldPopulateDatabase when always has events on database", async () => {
    jest.unstable_mockModule("../model/results", () => ({
      hasEventsOnDate: jest.fn(() => true),
    }));
    const { hasEventsOnDate } = await import("../model/results");
    const { shouldPopulateDatabase } = await import("./results");

    const todayCall = await shouldPopulateDatabase(today);
    expect(hasEventsOnDate).toHaveBeenCalled();
    expect(todayCall).toBeTruthy();

    const tomorrowCall = await shouldPopulateDatabase(tomorrow);
    expect(hasEventsOnDate).toHaveBeenCalledWith(tomorrow);
    expect(tomorrowCall).toBeTruthy();

    const yesterdayCall = await shouldPopulateDatabase(yesterday);
    expect(hasEventsOnDate).toHaveBeenCalledWith(yesterday);
    expect(yesterdayCall).toBeFalsy();
  });
});
