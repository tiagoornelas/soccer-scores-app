import express from "express";
import { compose } from "../utils/helpers/toolkit.js";
import { respondWithData } from "../utils/helpers/response.js";
import { shouldPopulateDatabase } from "../service/results.js";
import { fetchPastMatchesByDate } from "../service/results.js";
import {
  groupMatchesByCountry,
  filterFuture,
} from "../utils/helpers/payload.js";
import {
  populateWithFinishedMatches,
  readFinishedMatchesByDate,
} from "../model/results.js";

const router = express.Router();

export async function getPastMatchesByDate(req, res, next) {
  try {
    const { date } = req.query;
    const enableProxy = await shouldPopulateDatabase(date);

    if (enableProxy) {
      console.log(
        `🔃 Proxy enabled: fetching finished matches from ${date}...`
      );
      const externalData = await fetchPastMatchesByDate(date);
      if (externalData.length > 0)
        await populateWithFinishedMatches(externalData);
    }

    const data = await readFinishedMatchesByDate(date);

    respondWithData(res, {
      countries: compose(groupMatchesByCountry, filterFuture)(data),
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

router.get("/", getPastMatchesByDate);

export default router;
