const express = require("express");
const CityController = require("../../controllers/city-controller");

const router = express.Router();

router.post('/city', CityController.createCity);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.getCity);
router.get('/city', CityController.getAllCities);
router.patch('/city/:id', CityController.updateCity);

module.exports = router;