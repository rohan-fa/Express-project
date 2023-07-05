const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
//Register a user
//@route POST /api/users/register
//public access so anyone can access the endpoint and then register the user

const registerUser =asyncHandler(async (req, res) => {
    //whenever user want to register themselves they need to provide username,email,password in the req.body
    const {username, email, password} = req.body;
    if (!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    //before creating a user what we need to check if the user is already registerd or not
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered")
    }
    //we will create a new user for that we are accepting the name, email and password for that we will add hash pass
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hasedpassword", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    console.log(`user created, ${user}`);
    //we dont want whole user details to show along with their password
    if(user){
        res.status(201).json({_id: user.id, email: user.email});
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.json({message: "Register the user"});
});

const loginUser =asyncHandler(async(req, res)=> {
    res.json({message: "login user"})
});

//this method will be private
const currentUser =asyncHandler(async (req, res)=> {
    res.json({ message: "Current user"});
});


module.exports = {registerUser, loginUser, currentUser};