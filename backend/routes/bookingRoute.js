const { Router } = require("express");
const auth = require("../midlleware/authMiddleware")
const { getBookings, createBooking, updateBooking, deleteBoking, getBooking } = require("../controller/bookingController");

 const router = Router();

router.get("/", auth, getBookings)
router.post("/", createBooking)
router.get("/:id", auth, getBooking)
router.put("/:id", auth, updateBooking)
router.delete("/:id", auth, deleteBoking)

module.exports = router;