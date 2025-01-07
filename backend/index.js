const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const roomRoute = require('./routes/roomRoute');
const bookingRoute = require('./routes/bookingRoute');
const { errorHandler } = require("./midlleware/errorHandler")
const userRoute = require('./routes/userRoute');
const cookieParser = require('cookie-parser');
const auth = require('./midlleware/authMiddleware');

const app = express();
const port = process.env.PORT || 5000;

connectDB();

// Middlewares
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/auth", auth);
app.use('/api/rooms', roomRoute);
app.use('/api/bookings', bookingRoute);
app.use('/api/user', userRoute);
app.use('/auth', userRoute);

// Error Handling Middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));
