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