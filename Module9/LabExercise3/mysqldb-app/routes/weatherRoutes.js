const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// GET /api/weather/{city} - Using URL parameters]
router.get("/:city", (req, res) => {
  Controllers.weatherController.getWeather(req, res);
});

// GET /api/weather?city={city} - Using query parameters
router.get("/", (req, res) => {
  Controllers.weatherController.getWeatherByQuery(req, res);
});

module.exports = router;
