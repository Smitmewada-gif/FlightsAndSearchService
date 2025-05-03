const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require('./config/serverConfig');
const Apiroutes = require('./routes/index');
const { where } = require("sequelize");
const {City} = require('./models/index');

const setUpAndStartSever = async () => {

  // create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  
  app.use('/api', Apiroutes);

  app.listen(PORT, async ()=>{
    console.log(`Server started at port ${PORT}`);
  });

}

setUpAndStartSever();