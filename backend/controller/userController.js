const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUser = async(req, res, next) => {
    try {
       const users = await User.findOne();
       if(!users){
        res.status(400);
        throw new Error("users not found")
       }

       return res.status(200).json(users)
    } catch (error) {
        next(error)
    }
};

const createUser = async(req, res, next) => {
    try {
        const { password, ...rest} = req.body;

        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt)
        const user = await User.create({
            ...rest,
            password: hashedPassword,
        });
        if(!user){
            res.status(400)
            throw new Error("User not created")
        }

        //hash password

        const { password: userPassword, ...otherDetails} = user._doc

        return res.status(201).json(otherDetails)
    } catch (error) {
        next(error)
    }
}

const loginUser = async(req, res, next) => {
    try {
        //validate date
        
        const { email, password} = req.body;

        const user = await User.findOne({ email });

        if(!user){
            res.status(400)
            throw new Error("user not found")
        }

        const isCorrect = await bcrypt.compare(password, user.password)

        if(!isCorrect){
            res.status(400)
            throw new Error("incorrect password")
        }

        //generate token then set cookie
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        res.cookie("jwt", token);

        const { password: userPassword, ...rest} = user._doc;

        return res.status(200).json({
            ...rest,
        })
    } catch (error) {
        next(error)
    }
}
const logoutUser = async (req, res, next) => {
    res.cookie("jwt", "", {
        expiresIn: "-1"
    })

    return res.json({message: "You have been logged out"})
}
module.exports = {
    getUser,
    createUser,
    loginUser,
    logoutUser
}