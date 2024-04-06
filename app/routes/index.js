const express = require("express");
const { userById, usersCollection } = require("../../mock/user");
const { send, sendPaginated } = require("../http/handler/response");
/**
 *
 * @param {express.Application} app
 */

function apiRoutes(app) {
  app.get("/user/", (_req, res) => {
    sendPaginated(res, usersCollection);
  });
  app.get("/user/:id/", (_, res) => {
    send(res, userById);
  });
  // app.post("/user/", (req, res) => {});
  // app.put("/user/:id/", (req, res) => {});
  // app.delete("/user/:id/", (req, res) => {});

  app.get("*", (_, res) => {
    res.status(400).send({ message: "Not found" });
  });
}

module.exports = { apiRoutes };
