import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import routes from "./routes.js";
import middlewares from "./src/middleware/index.js";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = JSON.parse(process.env.API_PORT) || 8080;

app.use("/live", routes.live, middlewares.error);
app.use("/results", routes.results, middlewares.error);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

export default app;
