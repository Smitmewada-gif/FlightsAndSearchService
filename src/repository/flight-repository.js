const {Flights} = require("../models/index");
const {Op} = require("sequelize");
class FlightRepository {

  #createFilter(data){
    const filter = {};
    let priceFilter = [];
    
    if(data.arrivalAirportId){
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if(data.departureAirportId){
      filter.departureAirportId = data.departureAirportId;
    }
    if(data.minPrice){
      priceFilter.push({price : {[Op.gte]: data.minPrice}})
    }
    if(data.maxPrice){
      priceFilter.push({price : {[Op.lte]: data.maxPrice}})
    }
    Object.assign(filter, {[Op.and] : priceFilter});
    return filter;
  }
  async createFlight(data){
    try{
      const flight = Flights.create(data);
      return flight;
    }
    catch (error){
      console.log("Something went wrong in the repository layer");
      throw {error};
    }
  }

  async getFlight(flightId){
    try{
      const flight = await Flights.findByPk(flightId);
      return flight;
    }
    catch (error) {
      console.log("Something went wrong in the repository layer");
      throw {error};
    }
  }

  async getAllFlights(filter){
    try{
      const filterObject = this.#createFilter(filter);
      const flights = await Flights.findAll({
        where: filterObject
      });
      return flights;
    }
    catch (error) {
      console.log("Something went wrong in the repository layer");
      console.log("error", error);
      throw {error};
    }
  }
}

module.exports = FlightRepository