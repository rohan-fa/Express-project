const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");


const router = express.Router();

router.post("/register", registerUser );
// we will have login endpoint 

router.post("/login", loginUser);
//we will make another endpoint that will point the current user

router.get("/current", currentUser );

module.exports = router;        