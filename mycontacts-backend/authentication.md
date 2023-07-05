### Lets start with authentication module
in here we are going to do? we are going to provide some endpoints, which will help us the user to regester themselves. And then login, once there login they can use a access token.and with the help of an acess token they can manage their contact.
### steps
Lets start with the routing first. go to the server.js. and inside the server.js
now we're going to have a user as a login users
```
app.use("/api/users ", require("./routes/userRoutes"));
```
Now lets go to the routes, inside the routes make a file called userRoutes
now in the client side status is 200
POST see the register
```
http://localhost:5001/api/users/register
```
similarly see the login or the current user sameway
### Next thing create controller for the users
now 
```
//Register a user
//@route POST /api/users/register
//public access so anyone can access the endpoint and then register the user

const registerUser =asyncHandler( async );
```
now let go to the userRoutes and copy and past to the controller
```
const registerUser =asyncHandler(async (req, res) => {
    res.json({message: "Register the user"});
});
```
### let import it in the userRoutes
```
router.post("/register", registerUser );
```
we will do the same for login. Now that we completed the routing and controller. lets give a try on the client. Everything is working fine

### let give the functionality to the register the user
### first we have to create the user model
let create the schema in the userModel.js 

### now that we created the schema lets go to the userController
```
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
//Register a user
//@route POST /api/users/register
//public access so anyone can access the endpoint and then register the user

const registerUser =asyncHandler(async (req, res) => {
    //whenever user want to register themselves they need to provide username,email,password in the req.body
    const {username, email, password} = req.body;
    if (!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    //before creating a user what we need to check if the user is already registerd or not
    const userAvailable = await User.findOne({email});      //we just placed the email address to check 
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered")
    }
    //we will create a new user for that we are accepting the name, email and password for that we will add hash pass
    res.json({message: "Register the user"});
});
```
in order to hash the password we need to import library bycrpt. lets import it  
```
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hasedpassword", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    console.log("user created", user)
    //we dont want whole user details to show along with their password
    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.json({message: "Register the user"});

```
client side passed. now if we go to mongoDB => collection => users => Now that we created the registered users. Now will create the endpoint for login. when ever a user is login we get an access token. and for that we are going to work for JWT json web token. 
 
