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
```http://localhost:5001/api/users/register
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

