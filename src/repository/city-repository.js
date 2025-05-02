const {City} = require("../models/index");

class CityRepository {
  async createCity({name}){
    try{
      const city = await City.create({name});
      return city;
    }
    catch (error){
      console.log("Something went wrong in the repository layer");
      throw {error};
    }
  }

  async deleteCity(cityId){
    try{
      City.destroy({
        where: {id: cityId}
      });
      return true;
    }
    catch (error) {
      throw {error};
    }
  }

  async getCity(cityId){
    try{
      const city = await City.findByPk(cityId);
      return city;
    }
    catch (error){
      console.log("Something went wrong in the repository layer");
      throw {error};
    }
  }

  async getAllCities(){
    try{
      const cities = City.findAll();
      return cities;
    }
    catch (error){
      console.log("Something went wrong in the repository layer");
      throw {error};
    }
  }

  async updateCity(cityId, data){
    try{
      // the commented approach return number of rows affected.
      // const city = City.update(
      //   data, {
      //   where : {id : cityId}
      //   }
      // );
      // return city;

      // below appraoch returns updated object.
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    }
    catch (error) {
      console.log("Something went wrong in the repository layer");
      throw {error};
    }
  }
}

module.exports = CityRepository;
