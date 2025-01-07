const { Router } = require("express");
const { getBookings, createBooking, updateBooking, deleteBoking, getBooking } = require("../controller/bookingController");

 const router = Router();

router.get("/", getBookings)
router.post("/", createBooking)
router.get("/:id", getBooking)
router.put("/:id", updateBooking)
router.delete("/:id", deleteBoking)

module.exports = router;