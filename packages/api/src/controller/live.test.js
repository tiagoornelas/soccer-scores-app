import { jest } from "@jest/globals";
import { buildReq, buildRes, buildNext } from "../utils/helpers/testing";

describe("Live Controller", () => {
  it("calls fetchLiveMatches function to fetch from external API", async () => {
    jest.unstable_mockModule("../service/live", () => ({
      fetchLiveMatches: jest.fn(() => []),
    }));

    const { getLiveMatches } = await import("./live");
    const { fetchLiveMatches } = await import("../service/live");

    const req = buildReq();
    const res = buildRes();
    const next = buildNext();

    await getLiveMatches(req, res, next);

    expect(fetchLiveMatches).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status).toHaveBeenCalledTimes(1);
  });
});
