const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")
//@desc Get all contacts
//routes GET /api/contacts
//@access public (later on we are going to make it as private when do the authentication)


const getContacts = async (req, res) =>{
    const contacts =await Contact.find({user_id: req.user.id});                       //this will be equl to contact model, dot and then it exposes some method to us so we can communicate with the database. let have find and then after that what we can do and lets pass this in the json.
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
        user_id: req.user.id
    });

    res.status(201).json(contact);
});

const getContact = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);   //if we cannot find any Id we will through an Error
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

const updateContact = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404)
        throw new Error("contact not found");
    }if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user should uopdate the wrong userId");
    }
    
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
    );
    res.status(200).json(updatedContact);
});    


const deleteContact = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }if(contact.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("user should uopdate the wrong userId");
  }
    await Contact.remove();
    res.status(200).json(contact);
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};