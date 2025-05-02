const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require('./config/serverConfig');
const Apiroutes = require('./routes/index');

const setUpAndStartSever = async () => {

  // create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  
  app.use('/api', Apiroutes);

  app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
  });

}

setUpAndStartSever();