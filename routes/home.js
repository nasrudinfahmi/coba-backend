import express from "express";

const HomeRouters = express.Router();

HomeRouters.get("/home", (_req, res) => {
  return res.status(200).send("Welcome Home");
});

export default HomeRouters;
