import axios from "axios";
import moment from "moment";
import { jest } from "@jest/globals";
import { fetchPastMatchesByDate, shouldPopulateDatabase } from "./results";

jest.spyOn(axios, "get");

describe("Live Service", () => {
  const today = moment().format("YYYY-MM-DD");

  it("calls axios function to fetch from external API", async () => {
    await fetchPastMatchesByDate(today);
    expect(axios.get).toHaveBeenCalled();
  });

  it("should check for shouldPopulateDatabase when always has events on database", async () => {
    const todayCall = await shouldPopulateDatabase(today);
    expect(todayCall).toBeTruthy();
  });
});
