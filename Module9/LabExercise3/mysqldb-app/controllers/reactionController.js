"use strict";
const Models = require("../models");
// finds all reactions in DB, then sends array as response
const getReactions = (res) => {
  Models.Reaction.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// uses JSON from request body to create new reaction in DB
const createReaction = (data, res) => {
  Models.Reaction.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  getReactions,
  createReaction,
};
