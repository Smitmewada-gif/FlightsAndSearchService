const {Airport} = require("../models/index");
const {Op} = require("sequelize");

class AirportRepository { 
  async getAllAirports(filter){
    try {
      if(filter.name){
        const airports = await Airport.findAll({
          where:{
            name:{
              [Op.startsWith]: filter.name
            }
          }
        });
        return airports;
      }
      const airports = await Airport.findAll();
      return airports;
    }
    catch (error) {
      console.log("Something went wrong in the repository layer");
      throw {error};
    }
  }

  async getAirport(airportId){
    try{
      const airport = Airport.findByPk(airportId);
      return airport;
    }
    catch (error){
      console.log("Something went wrong in the repository layer");
      throw {error};
    }
  }

  async createAirport(data){
    try{
      const airport = Airport.create({name: data.name, city_id: data.city_id});
      return airport;
    }
    catch (error) {
      console.log("Something went wrong in the repository layer");
      throw {error};
    }
  }

  async deleteAirport(airportId){
    try{
      const response = Airport.destroy({
        where:{id: airportId}
      });
      return response;
    }
    catch (error) {
      console.log("Something went wrong in the repository layer");
      throw {error};
    }
  }

  async updateAirport(airportId, data){
    try {
      const airport = await Airport.findByPk(airportId);
      airport.name = data.name;
      // airport.address = data.address;
      // airport.city_id = data.city_id;
      await airport.save();
      return airport;
    }
    catch (error) {
      console.log("Something went wrong in the repository layer");
      throw {error};
    }
  }
}


module.exports = AirportRepository