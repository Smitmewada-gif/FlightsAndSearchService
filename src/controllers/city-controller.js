const {CityService} = require("../services/index");
const cityService = new CityService();

// POST -> /city
const createCity = async (req, res) =>{
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      error: {}
    });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error
    });
  }
}


// // DELETE -> /city/:id
const destroy = async (req, res) =>{
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a city",
      error: {}
    });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a city",
      err: error
    });
  }
}

// GET -> /city/:id
const getCity = async (req, res) =>{
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully fetched a city",
      error: {}
    });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      err: error
    })
  }
}

// PATCH -> /city/:id and data in req.body
const updateCity = async (req, res) =>{
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully updated a city",
      error: {}
    });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: error
    })
  }
}

module.exports = {
  createCity, destroy, updateCity, getCity
}