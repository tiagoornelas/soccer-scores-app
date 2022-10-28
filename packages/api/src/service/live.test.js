import axios from "axios";
import { jest } from "@jest/globals";
import { fetchLiveMatches } from "./live";
import { groupMatchesByCountry } from "../utils/helpers/payload";
import {
  LIVE_MATCHES_MOCK,
  EXPECTED_FORMATTED_ARRAY,
} from "../utils/mocks/apiFootballLiveMatches.mock";

jest.spyOn(axios, "get");

describe("Live Service", () => {
  it("calls axios function to fetch from external API", async () => {
    await fetchLiveMatches();
    expect(axios.get).toHaveBeenCalled();
  });

  it("formats live matches, groupping them by tournament", () => {
    const formattedMatches = groupMatchesByCountry(LIVE_MATCHES_MOCK);
    expect(formattedMatches).toEqual(EXPECTED_FORMATTED_ARRAY);
  });
});
