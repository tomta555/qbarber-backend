const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

const url = 'mongodb://localhost:27017/qbarber?authSource=admin'

mongoose
    .connect(url, options)
    .then(function() {
      console.log('MongoDB is connected');
    })
    .catch(function(err) {
      console.log(err);
    });
