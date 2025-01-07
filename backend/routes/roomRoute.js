const { Router } = require("express");
const auth = require("../midlleware/authMiddleware")
const { 
    getRooms, 
    createRoom, 
    getRoom, 
    updateRoom, 
    deleteRoom 
} = require("../controller/roomControllers")

const router = Router();

// get all rooms
router.get("/", getRooms);

//create room
router.post("/", auth, createRoom)

//single room
router.get("/:id", getRoom)

//update room
router.put("/:id", auth, updateRoom)

//delete room
router.delete("/:id", auth, deleteRoom)

module.exports = router;