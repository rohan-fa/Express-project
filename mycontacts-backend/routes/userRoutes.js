const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
    res.json({message: "Register the user"});
});
// we will have login endpoint 

router.post("/login", (req, res)=> {
    res.json({message: "login user"})
});
//we will make another endpoint that will point the current user

router.post("/current", (req, res)=> {
    res.json({ message: "Current user"});
});

module.exports = router;