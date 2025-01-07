const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        console.log("Token received:", token);
        if (!token) {
            return res.status(401).json({ message: "Not authorized" });
        }
        //verify token
        const data = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await User.findById(data.id);
        if (!user) {
            return res.status(400).json({ message: "Not authorized" });
        }

        req.user = user;
        
        next();
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: "No token" });
    }
};

module.exports = auth;
