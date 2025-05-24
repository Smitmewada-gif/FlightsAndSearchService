const express = require("express");

const {FlightMiddlewares} = require("../../middlewares/index");

const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");
const FlightController = require("../../controllers/flight-controller")

const router = express.Router();

// city routes
router.post('/city', CityController.createCity);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.getCity);
router.get('/city', CityController.getAllCities);
router.patch('/city/:id', CityController.updateCity);

// airport routes
router.post('/airport', AirportController.createAirport);
router.get('/airport', AirportController.getAllAirports);
router.get('/airport/:id', AirportController.getAirport);
router.delete('/airport/:id', AirportController.deleteAirport);
router.patch('/airport/:id', AirportController.updateAirport);

// flight routes
router.post('/flights', FlightMiddlewares.validateCreateFlight, FlightController.createFlight);
router.get('/flights', FlightController.getAllFlights);
router.get('/flights/:id', FlightController.getFlight);
router.patch('/flights/:id', FlightController.updateFlight);

module.exports = router;