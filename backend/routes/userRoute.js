const { Router } = require("express");
const auth = require("../midlleware/authMiddleware")
const { getUser, createUser, loginUser, logoutUser } = require("../controller/userController");

const router = Router();

router.get("/", auth, getUser)
router.post("/create", createUser)
router.post("/login", loginUser)
router.get("/logout", logoutUser)

module.exports = router;