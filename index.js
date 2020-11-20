const express = ("express");
const app = express();
morgan = require ('morgan');
//error handling
const app = express();
const bodyParser = require('body-parser'),
methodOverride = require('method-override');




let topMovies = [
  {
    title:'Kikis Delivery Service' ,
    director: '',
  },
  { title: 'The Land before Time',
  director: 'Don Bluth',

},
{ title: 'Sixteen Candles',
director: 'John Hughes',

},
{title:'Heathers',
director: 'Michael Lehmann',


},
{title: 'The Breakfast Club',
director:'John Hughes',
}

{title:'The Color Purple',
director:'Steven Spielberg',

},
{title: 'Weird Science',
  director:'',
},
{title:'Friday the 13th',
director:'Sean S. Cunningham',

},
{title: 'Purple Rain',
director:'Albert Magnoli',

},
{title: 'Beetlegeuse',
director:'Tim Burton',

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
