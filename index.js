const express = ("express");
const app = express();
morgan = require ('morgan');
bodyParser=require('body-parser'),
uuid= require('uuid');
let auth = require('./auth')(app);
const passport = require('./passport');

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

mongoose.connect('mongodb://localhost:27017/myMovies',
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
app.listen(8080,()=>
console.log('Your app is listneing on port 8080.');
);
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
