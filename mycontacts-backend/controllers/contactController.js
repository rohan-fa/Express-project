const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//routes GET /api/contacts
//@access public (later on we are going to make it as private when do the authentication)


const getContacts = async (req, res) =>{
    res.status(200).json({message: "Get contact"});
};

const createContact = asyncHandler(async(req, res) =>{

    console.log("the request body is:", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    res.status(201).json({message: "create contact"});
});

const getContact = asyncHandler(async (req, res) =>{
    res.status(200).json({message: `Get contact ${req.params.id} `});
});

const updateContact = asyncHandler(async (req, res) =>{
    res.status(200).json({message: `update contact ${req.params.id}`});
});


const deleteContact = asyncHandler(async (req, res) =>{
    res.status(200).json({message: `delete contact ${req.params.id} `});
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};