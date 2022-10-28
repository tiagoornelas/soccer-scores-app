import express from "express";
import { respondWithData } from "../utils/helpers/response.js";
import { shouldPopulateDatabase } from "../service/results.js";
import { groupMatchesByCountry } from "../utils/helpers/payload.js";
import { fetchPastMatchesByDate } from "../service/results.js";
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
      await populateWithFinishedMatches(externalData);
    }

    const data = await readFinishedMatchesByDate(date);
    respondWithData(res, { countries: groupMatchesByCountry(data) });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

router.get("/", getPastMatchesByDate);

export default router;
