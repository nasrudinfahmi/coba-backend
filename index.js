import express from "express";
import helmet from "helmet";
import serverless from "serverless-http";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 6000;
const router = express.Router();

app.use(express.json());
app.use(helmet());

app.get("/", (_req, res) => {
  return res.status(200).send("Hello World!");
});

router.get("/coba", (_req, res) => {
  return res.json({
    success: true,
    status: 200,
    message: "Berhasil",
  });
});

app.use("/.netlify/functions/api", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

export const handler = serverless(app);
