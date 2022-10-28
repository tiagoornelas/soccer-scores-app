import { jest } from "@jest/globals";
import { buildReq, buildRes, buildNext } from "../utils/helpers/testing";

describe("Live Controller", () => {
  it("calls fetchPastMatchesByDate function to fetch from external API", async () => {
    jest.unstable_mockModule("../service/results", () => ({
      shouldPopulateDatabase: jest.fn(() => false),
      fetchPastMatchesByDate: jest.fn(() => []),
    }));

    jest.unstable_mockModule("../model/results.js", () => ({
      populateWithFinishedMatches: jest.fn(),
      readFinishedMatchesByDate: jest.fn(() => []),
    }));

    jest.unstable_mockModule("../utils/helpers/response.js", () => ({
      respondWithData: jest.fn(() => []),
    }));

    const { getPastMatchesByDate } = await import("./results");
    const { readFinishedMatchesByDate } = await import("../model/results.js");
    const { respondWithData } = await import("../utils/helpers/response.js");

    const req = buildReq({ query: { date: "2022-10-27" } });
    const res = buildRes();
    const next = buildNext();

    await getPastMatchesByDate(req, res, next);
    expect(readFinishedMatchesByDate).toHaveBeenCalledWith("2022-10-27");
    expect(respondWithData).toHaveBeenCalled();
  });
});
