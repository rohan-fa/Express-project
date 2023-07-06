const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");
const validateToken = require("../middleware/validationTokenHandler");


const router = express.Router();

router.post("/register", registerUser );
// we will have login endpoint 

router.post("/login", loginUser);
//we will make another endpoint that will point the current user

router.get("/current", validateToken, currentUser);

module.exports = router;        