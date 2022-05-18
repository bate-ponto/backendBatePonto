const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_USER = 'batePontoFadergs';
const MONGODB_PASSWORD = encodeURIComponent('#batePonto2022'); 
const MONGODB_DATABASE = 'batePontoApi';
const MONGODB_URL = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.lpti6.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

const TimeRegisterRoutes = require('./routes/TimeRegisterRoutes');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use('/', TimeRegisterRoutes);

mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log({ message: 'connected' });
    app.listen(3000);
  })
  .catch((err) => {
    console.error({ message: 'Connection fail', error: err });
  });
