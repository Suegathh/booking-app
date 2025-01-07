const dotenv = require ('dotenv'). config()
const express = require('express');
const connectDB = require("./config/db")
const  roomRoute  = require("./routes/roomRoute");
const bookingRoute = require("./routes/bookingRoute")
const { errorHandler } = require('./midlleware/errorHandler');

const app = express();

const port = process.env.PORT || 5000;

connectDB()

app.use(express.json());

app.use("/api/rooms", roomRoute);
app.use("/api/bookings", bookingRoute)

app.use(errorHandler)



app.listen(port, () => 
console.log(`Listening on port ${port}`))