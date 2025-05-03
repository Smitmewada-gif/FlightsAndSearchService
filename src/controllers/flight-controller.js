const {FlightService} = require("../services/index");
const flightService = new FlightService();

const createFlight = async (req , res) =>{
  try{
    const flight = await flightService.createFlight(req.body);
    console.log("flight", flight);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfully created a flight",
      error: {}
    });
  }
  catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create flight",
      error: error
    });
  }
  
}

module.exports = {createFlight};