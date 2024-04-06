const express = require("express");
/**
 *
 * @param {express.Application} app
 */

function apiRoutes(app) {
  app.get("/api/", (res) => {
    res.json({ message: "Hello, world!" });
  });

  app.get("*", (req, res) => {
    res.status(400).send({ message: "Not found" });
  });
}

module.exports = { apiRoutes };
