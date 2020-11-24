const express = ("express");
const app = express();
morgan = require ('morgan');
bodyParser=require('body-parser'),
uuid= require('uuid');
//error handling
const app = express();
const bodyParser = require('body-parser'),
methodOverride = require('method-override');




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

  app.get('/books',(req, res)=>{
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

app.use((err, req, res, next) => {
  // logic
});
app.use(bodyParser.json());

//Gets the list of data about ALL movies
app.get('/topMovies'),(req, res) =>{res.json(topMovies);
});

//gets data about a single movies
app.get('/topMovies/:title/genre',(req,res) =>{
  res.json(topMovies.find((topMovies) =>
{return topMovies.title.genre === req.params.title.genre}));
});

//gets data about a single director
app.get('/movies/directors/:/directorName', (req,res)=>{
res.json(topMovies.find(topMovies)=>
return topMovies.data_about_director === req.params.data_about_director}));
)}
//adds data for a new movie to our list of topMovies
app.post('/topMovies',(req,res)=>){
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
app.delete('/topMovies/:title',(req, res)=>{
  let topMovies = topMovies.find((topMovies)=>{
    topMovies.title === req.params.title});
    if (topMovies){
      topMovies = topMovies.filter((obj)=>{
        return obj.title !== req.params.title});
        res.status(201).send('topMovies '+ req.params.title + ' was deleted.');
      });
    }
});
// update the user info
app.put('/topMovies/:topMovies/:title/:genre')(req,res)=>{
let topMovies = topMovies.find((topMovies)=>{return topMovies.title === req.params.title});
if (topMovies){
  topMovies.data_about_director[req.params.data_about_director] = parseInt(req.params.user);
  res.status(201).send('movie'+ req.params.title+ ' was assigned a grade of '+ req.params.user +' in '+ req.params.data_about_director);
} else{
  res.status(404).send('Director with the name '+ req.params.director + ' was not found. ');
}
});
