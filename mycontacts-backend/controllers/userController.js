const asyncHandler = require("express-async-handler");
//Register a user
//@route POST /api/users/register
//public access so anyone can access the endpoint and then register the user

const registerUser =asyncHandler(async (req, res) => {
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