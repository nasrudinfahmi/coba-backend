import express from "express";
import helmet from "helmet";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 6000;
const router = express.Router();

app.use(express.json());
app.use(helmet());

app.get("/", (_req, res) => {
  return res.status(200).send("Hello World!");
});

app.get("/home", (_req, res) => {
  return res.status(200).send("Welcome Home");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
