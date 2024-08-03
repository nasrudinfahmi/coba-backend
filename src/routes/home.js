import express from "express";

const HomeRouters = express.Router();

HomeRouters.get("/home", (_req, res) => {
  return res.status(200).send("Welcome Home");
});

HomeRouters.get("/shop", (_req, res) => {
  const url = "https://gemilangku.netlify.app/";
  return res.redirect(url);
});

export default HomeRouters;
