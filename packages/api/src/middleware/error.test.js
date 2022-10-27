import error from "./error";
import { buildReq, buildRes, buildNext } from "../utils/helpers/testing";

describe("Error Middleware", () => {
  it("should handle errors when passed by next", () => {
    const req = buildReq();
    const res = buildRes();
    const next = buildNext();
    const err = new Error("Some message");

    error(err, req, res, next);
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.status).toHaveBeenCalledTimes(1);
  });
});
