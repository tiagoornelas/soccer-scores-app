import express from "express";
import { fetchLiveMatches } from "../service/live.js";
import { respondWithData } from "../utils/helpers/response.js";

const router = express.Router();

export async function getLiveMatches(req, res, next) {
  try {
    const response = await fetchLiveMatches();
    respondWithData(res, { countries: response });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

router.get("/", getLiveMatches);

export default router;
