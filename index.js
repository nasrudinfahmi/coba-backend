import express from "express";
import helmet from "helmet";
import "dotenv/config";
import HomeRouters from "./src/routes/home.js";

const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());
app.use(helmet());

app.get("/", (_req, res) => {
  return res.status(200).send("Hello World!");
});

app.use(HomeRouters);
app.use("*", (_req, res) => {
  return res.status(404).send("Not Found!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
