import mongoose from 'mongoose';
require('dotenv').config();


mongoose.connect(MONGO_URL);


let conx = mongoose.connection;

conx.on('error', console.error.bind(console, 'connection error:'));

conx.once('open', function() {

   // we're connected!

   console.log("we are connected");

});