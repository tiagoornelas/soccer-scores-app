import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoConnection = () => {
  const MONGO_DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@soccer-score-db.61ginme.mongodb.net/?retryWrites=true&w=majority`;
  const DB_USERNAME = JSON.parse(process.env.DB_USERNAME);
  const DB_PASSWORD = JSON.parse(process.env.DB_PASSWORD);
  const DB_NAME = "soccer-scores";
  return MongoClient.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

export default mongoConnection;
