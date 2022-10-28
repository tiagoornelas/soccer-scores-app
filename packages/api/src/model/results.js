import mongoConnection from "../connection/database.js";
import { assureFinisehdMatchesOnly } from "../utils/helpers/payload.js";

function populateWithFinishedMatches(matches) {
  // By bulking updating with upsert, if the match has to be updated it will be accordinlgy,
  // but if it needs to be created, it will be inserted
  const operations = matches.map((match) => ({
    updateOne: {
      filter: {
        match_id: match.match_id,
      },
      update: {
        $set: match,
      },
      upsert: true,
    },
  }));

  return mongoConnection().then((db) =>
    db.collection("matches").bulkWrite(operations)
  );
}

async function readFinishedMatchesByDate(date) {
  const response = await mongoConnection().then((db) =>
    db.collection("matches").find({ match_date: date }).toArray()
  );
  return assureFinisehdMatchesOnly(response);
}

async function hasEventsOnDate(date) {
  const response = await readFinishedMatchesByDate(date);
  return response.length > 0;
}

export {
  hasEventsOnDate,
  populateWithFinishedMatches,
  readFinishedMatchesByDate,
};
