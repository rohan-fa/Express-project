//@desc Get all contacts
//routes GET /api/contacts
//@access public (later on we are going to make it as private when do the authentication)

const getContact = (req, res) =>{
    res.status(200).json({message: "Get contact"});
};

//@desc create all contacts
//routes POST /api/contacts
//@access public (later on we are going to make it as private when do the authentication)
const createContact = (req, res) =>{
    res.status(201).json({message: "create contact"});
};

module.exports = {getContact};