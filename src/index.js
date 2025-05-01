const express = require("express");
require('dotenv').config()
const { PORT } = require('./config/serverConfig');

const setUpAndStartSever = async () => {

  const app = express();

  app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
  });

}

setUpAndStartSever();