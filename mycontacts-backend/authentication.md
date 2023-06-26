### Lets start with authentication module
in here we are going to do? we are going to provide some endpoints, which will help us the user to regester themselves. And then login, once there login they can use a access token.and with the help of an acess token they can manage their contact.
### steps
Lets start with the routing first. go to the server.js. and inside the server.js
now we're going to have a user as a login users
```
app.use("/api/users ", require("./routes/userRoutes"));
```
Now lets go to the routes, inside the routes make a file called userRoutes
now in the client side statius is 200
