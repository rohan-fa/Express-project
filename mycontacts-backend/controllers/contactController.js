const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")
//@desc Get all contacts
//routes GET /api/contacts
//@access public (later on we are going to make it as private when do the authentication)


const getContacts = async (req, res) =>{
    const contacts =await Contact.find();                       //this will be equl to contact model, dot and then it exposes some method to us so we can communicate with the database. let have find and then after that what we can do and lets pass this in the json.
    res.status(200).json(contacts);
};

const createContact = asyncHandler(async(req, res) =>{

    console.log("the request body is:", req.body);
    const {name, email, phone} = req.body;
    res.status(400);
    if(!name || !email || !phone){
        throw new Error("All fields are mandatory")
    }
    const contact = await Contact.create({
        name,           //we already detructured it like this const {name, email, phone} = req.body; so in ES6 if the key and the values are the same we can just use key
        email,
        phone,
    });

    res.status(201).json(contact);
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