import mongoConnection from "../connection/database.js";

async function hasEventsOnDate(date) {
  console.log("Has Events On Date?");
}

function populateWithFinishedMatches(matches) {
  return mongoConnection().then(db =>
    db.collection("matches").insertMany(matches)
  );
}

function readFinishedMatchesByDate(date) {}

export {
  hasEventsOnDate,
  populateWithFinishedMatches,
  readFinishedMatchesByDate
};
