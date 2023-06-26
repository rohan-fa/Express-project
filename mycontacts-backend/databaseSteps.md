### Now time for mongoDB setup
created org. now connecting with the vs with mongo extension. go to the overview, then connect , compass then copy the short code. 
now in the extension Add connection => connection String then paste the code over the top. 

### now connect with the application 
go to mongo => connect => mongo driver => copy the code
go to the .env and add there

### create a config folder
in order to connect our mongoDB database, we will a mongooes which is a object model desing schema for our entites like contacts or user and it help us to communicate with the mongoDB database. 

### dBconnection 
create the connection and import it to server.js

### let create schema
create schema for our contact. file called models => contactModel. in the schema we will make required field for the object
now that we made exported it. we will apply crud operation and lets store the data in the real database. 

### got to the contactController.js
let start with the 
```
const getContacts = async (req, res) =>{
    res.status(200).json({message: "Get contact"});
};
```
```

const getContacts = async (req, res) =>{
    const contacts = await Contact.find();                       //this will be equl to contact model, dot and then it exposes some method to us so we can communicate with the database. let have find and then after that what we can do and lets pass this in the json.
    res.status(200).json(contacts);
};
```
now let go back to the client side to check if the data are showing
send GET http://localhost:5001/api/contacts and press send see if it working. result came as an empty array. let give some data 
```
POST 
{
"name":"Rohan",
"email":"rohan@gmail.com",
"phone": "097q09234"
}
```
in contactController: 
```
const createContact = asyncHandler(async(req, res) =>{

    console.log("the request body is:", req.body);
    const {name, email, phone} = req.body;
    res.status(400);
    if(!name || !email || !phone){
        throw new Error("All fields are mandatory")
    }
```
as we said if there is no name email or phone through an error and if there is then 
```
    const contact = await Contact.create({
        name,           //we already detructured it like this const {name, email, phone} = req.body; so in ES6 if the key and the values are the same we can just use key
        email,
        phone,
    });

    res.status(201).json(contact);
});
```
So its working 
### so lets get individual contact


