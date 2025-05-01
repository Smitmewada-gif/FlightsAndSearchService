const {City} = require("../models/index");

class CityRepository {
  async createcity({name}){
    try{
      const city = await City.create({name});
    }
    catch (error){
      throw {error}
    }
  }

  async deleteCity({cityId}){
    try{
      const city = City.destroy({
        where: {id: cityId}
      })
    }
    catch (error) {
      throw {error};
    }
  }
}

module.exports = CityRepository;
