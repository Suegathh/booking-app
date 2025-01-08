const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
   },
   price: {
    type: Number,
    required: true,
   },
   desc: {
    type: String,
    required: true
   },
   img: {
      types: [String]
   },
   roomNumbers: {
     type: [{
        number: Number,
        unavailableDates: [Date]
     }]
   } 
})
module.exports = mongoose.model("Rooms", roomSchema);