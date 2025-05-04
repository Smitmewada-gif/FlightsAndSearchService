class CrudService{
  constructor(repository){
    this.repository = repository;
  }

  async create(data){
    try {
      const result = await this.repository.create(data);
      return result;
    } catch (error) {
        console.log("Something went wrong in Crud repository");
        throw error;
    }
  }

  async destroy(id){
    try {
      const result = await this.repository.destroy(id);
      return result;
    } catch (error) {
        console.log("Something went wrong in Crud repository");
        throw error;
    }
  }

  async get(id){
    try {
      const result = await this.repository.get(id);
      return result;
    } catch (error) {
        console.log("Something went wrong in Crud repository");
        throw error;
    }
  }

  async getAll(data){
    try {
      const result = await this.repository.getAll(id);
      return result;
    } catch (error) {
        console.log("Something went wrong in Crud repository");
        throw error;
    }
  }

  async update(id, data){
    try {
      const result = await this.repository.update(data, {
        where : {id: id}
      });
      return result;
    } catch (error) {
        console.log("Something went wrong in Crud repository");
        throw error;
    }
  }
}

module.exports = CrudService;