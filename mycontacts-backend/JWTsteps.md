```
jwt.io

```
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```
it is json sample web token. it has three parts 
- Header algorithm of token. (red)
- Payload. that payload we are going to have user information that we are add in our token. (pink)
- Signature varification (paste) <br>
this is all about json web token. Now let go and add it to our application. 
```
npm i jsonwebtoken

```
#### lets go to the login functionality login endpoint
useController => in the login endpoint, client is sending the email address and the password that case we need to match the password and then we provide the user back with a access token. 
import it and go to the loginUser block
```
    const user = await User.findOne({email});
```
compare password with hashedpassword. first we need a user and along that we also make a check on the password. Inorder to do that we can take bycrpt which compares
```
    if(user && (await bcrypt.compare(password, user.password))){
```
let create a access token, now we can use the jwt and it has a method on signin. we need to sign for the token for our user. jwt.sign()going to take few parameters.so it we be an object,we need to provide the payload. in the payload:Data (in website) there is user object name and password. we will only embed the name. so we will have user object as my payload and then we will embed the username.eamil address . we will provide an access token secret for that go to .env
```
        const accessToken = jwt.sign({
            user: {
                username: user.name,
                email: user.email,
                id: user.id
            }, 
        },process.env.ACCESS_TOKEN_SECRET
    );
```
expireration date of our token
```        
{expiresIn: "1m"}
```
if this matches in that case? we need to provide an access token in the response. 
```        
res.status(200).json({accessToken});
    }else{ 
        res.status(401);
        throw new Error("email or password is not valid");
    }
    res.json({message: "login user"})

```
Now go to the client side and make a req
#### userController: let make the access private
let start with the current user. we need an access token so that only authenticated user can access this route. <br>
userRoute.js => before we do anything in the userRoutes we need to add a middleware which is going to help us validate the token which a client is sending as a request. <br>
client=> POST => api/users/current, copy the previous accesstoken in the bearer section.Then press the send. 
#### middleware folder => validationTokenHandle.js
```
const asyncHandler = require("express-async-handler");
const jwt = require("jwtwentoken");


const validation = asyncHandler(async(req, res, next)=> {
    let token; 
    
});
```
in here go to the client => create a new token by POST to login => copy the token => paste it in Bearer and in Headers=> Authentication and then Bearer [token]
#### almost validation.js part finished
after export it. to make use of validationToken we will go to userRoutes => 
```
router.get("/current", currentUser, validateToken);

```
to get new token start login
```
http://localhost:5001/api/users/login

```
So what we did so far in the validation is that we have varified the token, and we have extracted the informations which was embeded in the token. the information which was embedded in the token was in the terminal like - 
```
- user: {
username: 'rohans1_Far',
  email: 'roha.farza1@gmail.com',
  password: '$2b$10$h04GthjCzHpGhpOBhXFlGeb78rtPUEcMxLvDv3XuQrt0hUD7cLGCe',
  id: "64a641320837929cfc6f116d",
}
```
we will append this req.user and then we will have this decoded.user
```
req.user = decoded.user
```
```
next() this is middleware we are going to intersept the request,and going to decode the token, and then we going to append the user information on the req.user property

```
now that we successfully verified jsonwebtoken, 
- register [POST]
- login [POST]
- current [GET] after login you will get access token copy that paste it in Bearer and Header section 
WHat we need to do is whenever someone is requesting the current user information. we need to go to the database in the mongoDB. Then we need to fetch the information and then provided as a response. 
userController => in current section => validateToken => we decoded in 
```
req.user = decoded.user
```
so the user information 
#### next step
next thing is to protect all our contact Routes. olny a logged in user can create delete update and read the contexts which they have created for themselves. Whenever you create a new contact we need to associate that contact we the user id creating it.