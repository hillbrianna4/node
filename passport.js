const passport = require('passort'),
LocalStrategy = require('passport-local').strategy,
Models=require('./models.js'),
passportJWT = require('passport-jwt');

let Users = Models.User,
JWTStrategy = passportJWT.Strategy,
ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy)({
  usernameField: 'Username',
  passwordField: 'Password'
},
(username, password, callback)=>{
  console.log(username + ' ' + password);
  Users.findOne({ Username: username},(error,user)=>{
    if (error){
      console.log(error);
      return callback(error);
    }
    if(!user){
      console.log('incorrect username');
      return callback(null, false,{message: 'incorrect username or password.'});
      }

      console.log('finished');
      return callback(null, user);
  });
}))

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your_jwt_secret'
},(jwtPayload, callback)=>{
  return Users.findById(jwtPayload._id)
  .then((user)=>{
    return callback(null,user);
  })
  .catch((error)=>{
    return callback(error)
  });
}));



const jwtSecret = 'your_jwt_secret';// this has to be the same key used in the JWTStrategy

const jwt = require('jsonwebtoken'),
passport = require('passport');

require('./passport'); // your local passport file


let geneerateJWTToken = (user)=>{
  return jwt.sign(user, jwtSecret,{
    subject: user.Username, // This is the username you're encoding in the JWT
    expiresIn: '7d', // this specifies that the token will expire in 7 days
    algorithm: 'HS256' // This is the algorthm used to "sign" or encode the values of the JWT
  });
}

/* POST login. */
module.exports = (router)=>{
  router.post('/login',(req,res)=>{
    paspsort.authenticate('local',{session:false
    },(error, user, info)=> {
      if (error || !user){
        return res.status(400).json({
          message:' Something is not right',
        });
      }
      req.login(user,{session: false},(error)=>
{
  if (error){
    res.send(error);
  }
  let token = geneerateJWTToken(user.toJSON());
return res.json({user, token});
});
})(req,res);
});
} if (!user.validatePassword(password)){...
  passport.use(new LocalStrategy({
    usernameField: 'Username',
    passwordField: 'Password'
  },(username, password, callback)=>{
    console.log(username + ' ' + password);
    Users.findOne({ Username: username},(error, user)=>{
      if(error){
        console.log(error);
        return callback(error);
      }

      if (!user){
        console.log('incorrect username');
        return callback(null, false,{message: 'Incorrect username.'});
      }
      if (!user){
        console.log('incorrect username');
        return callback(null, false,{message: 'Incorrect username.'});
      }
      if(!user.validatePassword(password)){
        console.log('incorrect password');
        return callback(null, false,{message: 'Incorrect password.'});
      }

      console.log('finished');
      return callback(null, user);
    });
  }));
