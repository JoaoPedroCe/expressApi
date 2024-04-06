const express = require("express");
const { send, sendPaginated } = require("../http/handler/response");
/**
 *
 * @param {express.Application} app
 */

function apiRoutes(app) {
  app.get("/user/", (_req, res) => {
    sendPaginated(res, [
      { id: 1, name: "John", age: "15", email: "john@email.com" },
      { id: 2, name: "Doe", age: "20", email: "doe@email.com" },
      { id: 3, name: "John Doe", age: "20", email: "doe@email.com" },
    ]);
  });
  app.get("/user/:id/", (_, res) => {
    send(res, { id: 3, name: "John Doe", age: "20", email: "doe@email.com" });
  });
  // app.post("/user/", (req, res) => {});
  // app.put("/user/:id/", (req, res) => {});
  // app.delete("/user/:id/", (req, res) => {});

  app.get("*", (_, res) => {
    res.status(400).send({ message: "Not found" });
  });
}

module.exports = { apiRoutes };
