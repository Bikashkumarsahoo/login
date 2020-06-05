const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const  router = require('./routes/routing');
const logger=require("./routes/logger")
const app = express();
const cors = require('cors'); 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/', router);
app.listen(8080);
logger.info("Server Started at port 8080!");