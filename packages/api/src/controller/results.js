import express from "express";
import { respondWithData } from "../utils/helpers/response.js";
import { shouldPopulateDatabase } from "../service/results.js";
// import { populateWithFinishedMatches } from "../model/results.js";
import { groupMatchesByCountry } from "../utils/helpers/payload.js";
import { fetchPastMatchesByDate } from "../service/results.js";

const router = express.Router();

export async function getPastMatchesByDate(req, res, next) {
  try {
    const { date } = req.query;
    const shoulFetchExternalData = true;

    if (shoulFetchExternalData) {
      const externalData = await fetchPastMatchesByDate(date);
      // await populateWithFinishedMatches(externalData);
    }

    // const data = await readFinishedMatchesByDate(date);

    respondWithData(res, { countries: "oba" });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

router.get("/", getPastMatchesByDate);

export default router;
