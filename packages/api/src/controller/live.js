import express from "express";
import { compose } from "../utils/helpers/toolkit.js";
import { fetchLiveMatches } from "../service/live.js";
import { respondWithData } from "../utils/helpers/response.js";
import {
  groupMatchesByCountry,
  filterFinished,
} from "../utils/helpers/payload.js";

const router = express.Router();

export async function getLiveMatches(req, res, next) {
  try {
    const response = await fetchLiveMatches();
    respondWithData(res, {
      countries: compose(groupMatchesByCountry, filterFinished)(response),
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

router.get("/", getLiveMatches);

export default router;
