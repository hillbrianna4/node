const express = ("express");
const app = express();
morgan = require ('morgan');
bodyParser=require('body-parser'),
uuid= require('uuid');
let auth = require('./auth')(app);
const passport = require('./passport');
const cors = require('cors');
const {check, validationResult} = require('express-validator');


//error handling
const app = express();
const bodyParser = require('body-parser'),
methodOverride = require('method-override');
const mongoose = require("mongoose");
const Models = require("./models.js");

const Movies = Models.Movie;
const Users = Models.Users;
const Genres = Models.Genre;
const Director= Models.Director;

mongoose.connect('mongodb+srv://myFlixDBAdmin:Rarugal99!@cluster0.sz2tr.mongodb.net/myMovies?retryWrites=true&w=majority',
 { useNewUrlParser: true,
   useUnifiedTopology: true });


let topMovies = [
  {
    title:'Kikis Delivery Service' ,
    genre:'animation',
    data_about_director:{
    director: 'Hayao Miyazaki',
    description:,
  }
  },

  { title: 'The Land before Time',
  genre:'animation',
  data_about_director:{
  director: 'Don Bluth',
}
},

{ title: 'Sixteen Candles',
genre:'romance',
data_about_director:{
director: 'John Hughes',
}
},

{title:'Heathers',
genre:'comedy',
data_about_director:{,
director: 'Michael Lehmann',
}
},

{title: 'The Breakfast Club',
genre:'comedy',
data_about_director:{
director:'John Hughes',
}
},

{title:'The Color Purple',
genre:'drama',
data_about_director:{
director:'Steven Spielberg',
}
},

{title: 'Weird Science',
genre:'comedy','romance',
data_about_director:{
director:'John Hughes',
}
},

{title:'Friday the 13th',
genre:'horror',
data_about_director:{
director:'Sean S. Cunningham',
}
},
{title: 'Purple Rain',
genre:'drama',
data_about_director:{
director:'Albert Magnoli',
}
},
{title: 'Beetlegeuse',
genre:'comedy',
data_about_director:{
director:'Tim Burton',

}
}
];

// GET requests
app.get('/', (req,res)=>{
  res.send('Welcome to the theatre!');
});

app.get('/documentation',(req, res)=>{
  res.sendFile('public/documentation.html',{ root:
    _dirname});

  });

  app.get('/movies',(req, res)=>{
    res.json(topMovies);
  });
}
app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});


app.get('/secreturl', (req, res) => {
  res.send('This is a secret url with super top-secret content.');

// listen for requests
const port = process.env.PORT || 8080;
app.listen(port,'0.0.0.0',()=>{
console.log('Listening on port'+ port)
});


const bodyParser = require('body-parser'),
  methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());
app.use(bodyParser.json();

app.use((err, req, res, next) => {
  // logic
});
app.use(bodyParser.json());

//Return a list of ALL movies to the user GET
app.get('/movies/:Title'),(req, res) =>{res.json(topMovies);
});

//Returns data about a genre(description) by name and title
app.get('/movies/director/:genreName',(req,res) =>{
  res.json(topMovies.find((topMovies) =>
{return topMovies.title.genre === req.params.title.genre}));
});

//returns data about a director(bio, birth year, death year)
app.get('/movies/directors/:/directorName', (req,res)=>{
res.json(topMovies.find(topMovies)=>
return topMovies.data_about_director === req.params.data_about_director}));
)}

// allow new users to registers
app.post('/users',(req, res)=>{
  let newUser = req.body;
  if (!newUser.name){
    const message = 'Missing name in request body';
    res.status(400).send(message);
  }else{
    newUser.id=uuid.v4();
    user.push(newUser);
    res.status(201).send(newUser);
  }
  }
});


//allow users to add a movie to their list of favorites
app.post('/users/:username/movies/:movieId',(req,res)=>){
  let newMovie = req.body;
  if (!newMovie.title){
    const message = 'Missing title name in request body';
    res.status(400).send(message);
  } else{
    newMovie.title = uuid.v4();
    topMovies.push(newMovie);
    res.status(201).send(newMovie);
  }
});

//deletes a movie from our list by ID
app.delete('/users/:username/movies/:movieId',(req, res)=>{
  let topMovies = topMovies.find((topMovies)=>{
    topMovies.title === req.params.title});
    if (topMovies){
      topMovies = topMovies.filter((obj)=>{
        return obj.title !== req.params.title});
        res.status(201).send('topMovies '+ req.params.title + ' was deleted.');
      });
    }
});

//allow existing users to deregister
app.delete('/users/:username', (req,res)=>{
  let user = user.find((user)=>{
    return user.id === req.params.id});
    if(user){
      user= user.filter((obj)=>{return obj.id !==req.params.id});
      res.status(201).send ('User ' + req.params.id + ' was deleted.');
    }
});
// update the user info
app.put('/user/:username')(req,res)=>{
  let user = user.find((user)=> { return user.username === req.params.username});
  if(user){
    user.info[req.params.info] = parseInt(req.params.info);
    res.status(201).send('user ' + req.params.username + 'in ' + req.params.info);
  } else {
    res.status(404).send ('User ' + req.params.username + ' was not found.');
  }
});

// GET request to the "/movies" URL"
app.get('/movies', passport.autheticate('jwt',{session
  : false}), (req, res)=>{
    Movies.find()
    .then((movies)=>{
      res.status(201).json(movies);
    })
    .catch((error)=>{
      console.error(error);
      res.status(500).send('Error:' + error);
    });
  });



  //cors
  app.use(cors());
let allowedOrigins = ['http://localhost:8080','http://testsite.com'];

app.use(cors({
  origins:(origins, callback)=>{
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin)=== -1){
      // If a specific origin isn’t found on the list of allowed origins
      let message = 'the CORS policy for this appication doesnt allow access from origin' + origin;
      return callback(new Error(message ),false);
    }
    return callback(null, true);
  }
}));

app.post('/users',
//Validation logic here for requests
//you can either use a chain of methods like .not() .isEmpty(
//which means "opposite of isEmpty" in plain English "is not empty"
//or use .isLength({min:5}) which means
//minimum vlaue of 5 characters are only allowed
[
  check('Username', 'Username is required').isLength({min:5}),
  check('Username', 'Username contains non alphanumeric character - not allowed.').isAlphaNumeric(),
  check('Password', 'Password is required').not().isEmpty(),
  check('Email', 'Email does not appear to be valid').isEmail()
], (req,res)=>{
  //check the validation object for errors
  let errors = validationResults(req);

  if(!errors.isEmpty()){
    return res.status(422).json({errors:errors.array() });
  }
  let hashedPassword = Users.hashPassword(req.body.Password);
  Users.findOne({ Username: req.body.Username})//Search to see if a user with the requested username already exists
  .then((user)=>{
    if(user) {
      //If the user is found, send a response that it already exists
      return res.status(400).send(req.body.Username + 'already exists');
    } else {
      Users
      .create({
        Username: req.body.Username,
        Password: hashedPassword,
        Email: req.body.Email,
        Birthday: req.body.Birtday
      })
      .then((user)=>{ res.status(201).json(user) })
      .catch((error)=> {
        console.error(error);
        res.status(500).send('Error: ' + error);
      });
    }
  })
.catch((error)=>{
  console.error(error);
  res.status(500).send('Error: ' + error);
});

});
