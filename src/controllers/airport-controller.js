const { AirportService } = require("../services/index")

const airportService = new AirportService();


const getAllAirports = async (req, res) =>{
  try{
    const airports = await airportService.getAllAirports(req.query);
    return res.status(200).json({
      data: airports,
      success: true,
      message: "Successfully fetched all airports",
      error: {}
    })
  }
  catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch airports",
      error: error
    });
  }
}

const getAirport = async (req, res) =>{
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully fetched an airport",
      error: {}
    });
  }
  catch (error) {
    return res.status(200).json({
      data: {},
      success: false,
      message: "Not able to fetch airport",
      error: error
    });
  }
}

const createAirport = async (req, res) =>{
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully created an airport",
      error: {}
    });
  }
  catch (error) {
    return res.status(200).json({
      data: {},
      success: false,
      message: "Not able to create airport",
      error: error
    });
  }
}

const deleteAirport = async (req, res) =>{
  try {
    const response = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted an airport",
      error: {}
    });
  }
  catch (error) {
    return res.status(200).json({
      data: {},
      success: false,
      message: "Not able to detete airport",
      error: error
    });
  }
}

const updateAirport = async (req, res) =>{
  try {
    const airport = await airportService.updateAirport(req.params.id, req.body);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully updated an airport",
      error: {}
    });
  }
  catch (error) {
    return res.status(200).json({
      data: {},
      success: false,
      message: "Not able to update airport",
      error: error
    });
  }
}

module.exports = {getAllAirports, getAirport, createAirport, deleteAirport, updateAirport};