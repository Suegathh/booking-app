const Room = require('../models/roomModel');

const getRooms = async (req, res) => {
   try {
     const rooms = await Room.find();

     if(!rooms){
        res.status(400);
        throw new Error("rooms not found")
     }
     return res.status(201).json(rooms)
   } catch (error) {
    next(error)
   }
};
//create room
const createRoom = async (req, res, next) => {
    try {
        const room = await Room.create(req.body);

        if (!room) {
            res.status(400);
            throw new Error("There was a problem creating room");
        }

        return res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get single room
const getRoom = async (req, res, next) => {
   try {
    const room = await Room.findById(req.params.id)

    if(!room){
        res.status(400)
        throw new Error("Room not found")
    }
    return res.status(200).json(room);
   } catch (error) {
    next(error)
   }
}

const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {
                new: true
            }
        );

        if (!updatedRoom) {
            res.status(400);
            throw new Error("Cannot update");
        }

        return res.status(200).json(updatedRoom);
    } catch (error) {
        res.status(500).json({ message: error.message });
        next(error);
    }
};
const deleteRoom = async(req, res, next) => {
    try {
        const room = await Room.findByIdAndDelete(req.params.id) 

        if(!room){
            res.status(400)
            throw new Error("room not deleted")
        }
        return res.status(200).json({id: req.params.id})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getRooms,
    createRoom,
    getRoom,
    updateRoom,
    deleteRoom
};
