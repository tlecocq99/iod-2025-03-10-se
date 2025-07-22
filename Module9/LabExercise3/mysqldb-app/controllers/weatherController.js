"use strict";
const axios = require("axios");

// Get weather for a specific city
const getWeather = async (req, res) => {
  try {
    const { city } = req.params;

    if (!city) {
      return res.status(400).send({
        result: 400,
        error: "City parameter is required",
      });
    }

    const response = await axios.get(`http://goweather.xyz/weather/${city}`);

    res.status(200).send({
      result: 200,
      data: {
        city: city,
        temperature: response.data.temperature,
        wind: response.data.wind,
        description: response.data.description,
        forecast: response.data.forecast,
      },
    });
  } catch (error) {
    console.error("Weather API error:", error.response?.data || error.message);
    res.status(500).send({
      result: 500,
      error: error.response?.data || "Weather service error",
    });
  }
};

// Get weather via query parameter
const getWeatherByQuery = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).send({
        result: 400,
        error: "City query parameter is required",
      });
    }

    const response = await axios.get(`http://goweather.xyz/weather/${city}`);

    res.status(200).send({
      result: 200,
      data: {
        city: city,
        temperature: response.data.temperature,
        wind: response.data.wind,
        description: response.data.description,
        forecast: response.data.forecast,
      },
    });
  } catch (error) {
    console.error("Weather API error:", error.response?.data || error.message);
    res.status(500).send({
      result: 500,
      error: error.response?.data || "Weather service error",
    });
  }
};

module.exports = {
  getWeather,
  getWeatherByQuery,
};
