const express = require("express");

/**
 * @param {express.Response} res
 */
function send(res, data = {}) {
  return res.status(200).json({ data: data });
}

/**
 * @param {express.Response} res
 */
function sendEmpty(res) {
  return res.status(204).send();
}

/**
 * @param {express.Response} res
 */
function sendPaginated(res, data) {
  return res.status(200).json({
    data: data,
    meta: { perPage: 3, currentPage: 1, lastPage: 15, total: 250 },
  });
}

module.exports = { send, sendEmpty, sendPaginated };
