
const Booking = require("../models/bookingModel")

const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find()
    if(!bookings){
        res.status(400)
        throw new Error("cannot find booking")
    }

    return res.status(200).json(bookings)
  } catch (error) {
    next(error)
  }
}

const createBooking = async (req, res, next) => {
    try {
        const booking = await Booking.create(req.body);

        if (!booking) {
            res.status(400);
            throw new Error("Cannot create booking");
        }

        return res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
        next(error);
    }
};
const updateBooking = async (req, res, next) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{
            new: true
        });

        if (!updatedBooking) {
            res.status(400);
            throw new Error("Cannot update booking");
        }
        const bookings = await Booking.find()
        return res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
        next(error);
    }
};

const deleteBoking = async(req, res, next) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id) 

        if(!booking){
            res.status(400)
            throw new Error("booking not deleted")
        }
        return res.status(200).json({id: req.params.id})
    } catch (error) {
        next(error)
    }
}
const getBooking = async(req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id)
        if(!booking){
            res.status(400)
            throw new Error("booking not found")
        }

        return res.status(200).json(booking)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getBookings,
    createBooking,
    updateBooking,
    deleteBoking,
    getBooking
}