const mongoose = require('mongoose');
const Models = require('./models.js');


const Movies = Models.Movie;
const Users = Models.User;



const movieSchema = new mongoose.Schema({
  Title: {type: String, required: true},
  Description: {type: String, required: true},
  Genre: {
    Name: String,
    Description: String
  },
  Director: {
    Name: String,
    Bio: String
  },
  Actors: [String],
  ImagePath: String,
  Featured: Boolean
});


let userSchema = mongoose.Schema({
  Username: {type: String, required: true},
  Password: {type: String, required: true},
  Email: {type: String, required: true},
  Birthday: Date,
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});
const movie = mongoose.model("Movies", movieSchema);

const movie1 = new Movie ({
  Title: {type:"Kikis Delivery Service", required: true},
  Description: {type:"In this anime feature, 13-year-old Kiki moves to a seaside town with her talking cat, Jiji, to spend a year alone, in accordance with her village's tradition for witches in training", required: true},
  Genre: {
    Name:"Animation",
    Description:"Animation is a method in which figures are manipulated to appear as moving images."
  },
  Director: {
    Name:"Hayao Miyazaki",
    Bio:"Hayao Miyazaki is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, a film and animation studio."
  },
  Actors: ["Kirsten Dunst", "Phil Hartman", "Debbie Reynolds"],
  ImagePath: "https://m.media-amazon.com/images/M/MV5BOTc0ODM1Njk1NF5BMl5BanBnXkFtZTcwMDI5OTEyNw@@._V1_UY268_CR3,0,182,268_AL_.jpg",
  Featured:true
});
})

const movie2 = new Movie ({
  Title: {type: "The land before time" , required: true},
  Description: {type: "An orphaned brontosaurus teams up with other young dinosaurs in order to reunite with their families in a valley.", required: true},
  Genre: {
    Name:"Animation",
    Description:"Animation is a method in which figures are manipulated to appear as moving images."
  },
  Director: {
    Name: "Don Bluth",
    Bio:"Don Bluth was one of the chief animators at Disney to come to the mantle after the great one's death. He eventually became the animation director for such films as The Rescuers and Pete’s Dragon."
  },
  Actors: ["Judith Barsi", "Candace Hutson", "Gabriel Damon"],
  ImagePath: "https://m.media-amazon.com/images/M/MV5BNDVhZjVmZWYtYTE0OC00MGFjLWI1YWQtZmJhNmE5NzI4ZWE4XkEyXkFqcGdeQXVyMzczMzE2ODM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  Featured: true
});

const movie3 = new Movie ({
  Title: {type:"Sixteen Candles", required: true},
  Description: {type:"A girl's sixteenth birthday becomes anything but special, as she suffers from every embarrassment possible.", required: true},
  Genre: {
    Name:"Romance",
    Description:"romance emotional feeling of love for, or a strong attraction towards another person, and the courtship behaviors undertaken by an individual to express those overall feelings and resultant emotions."
  },
  Director: {
    Name:"John Hughes",
    Bio:"John Hughes was born on February 18, 1950 in Lansing, Michigan, USA as John Wilden Hughes Jr. He was a writer, known for Planes, Trains & Automobiles,  The Breakfast Club and Weird Science."
  },
  Actors: ["Molly Ringwald","Michael Schoeffling", "Anthony Michael Hall"],
  ImagePath:"https://m.media-amazon.com/images/M/MV5BMTgzNTkxMTkxMl5BMl5BanBnXkFtZTgwMjE3NjkzMTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
  Featured: true
});


const movie4 = new Movie ({
  Title: {type:"Heathers", required: true},
  Description: {type:"In order to get out of the snobby clique that is destroying her good-girl reputation, an intelligent teen teams up with a dark sociopath in a plot to kill the cool kids.", required: true},
  Genre: {
    Name:"Comedy",
    Description:"comedy is a literary genre and a type of dramatic work that is amusing and satirical in its tone, mostly having a cheerful ending."
  },
  Director: {
    Name:"Michael Lehman",
    Bio:"Michael Lehmann was born on March 30, 1957 in Francisco, California, USA as Michael Stephen Lehmann. He is a director and producer, known for Heathers, Hudson Hawk and American Horror Story."
  },
  Actors: ["Winona Ryder", "Christian Slater", "Shannen Doherty"],
  ImagePath:"https://m.media-amazon.com/images/M/MV5BMjE0Mjc3ODAwNV5BMl5BanBnXkFtZTgwMDM3ODI1MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
  Featured:true
});


const movie5 = new Movie({
  Title: {type:"The Breakfast Club", required: true},
  Description: {type:"Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.", required: true},
  Genre: {
    Name:"Comedy",
    Description:"Comedy is a literary genre and a type of dramatic work that is amusing and satirical in its tone, mostly having a cheerful ending."
  },
  Director: {
    Name:"John Hughes",
    Bio:"John Hughes was born on February 18, 1950 in Lansing, Michigan, USA as John Wilden Hughes Jr. He was a writer, known for Planes, Trains & Automobiles,  The Breakfast Club and Weird Science."
  },
  Actors: ["Emilio Estevez", "Judd Nelson", "Molly Ringwald"],
  ImagePath:"https://m.media-amazon.com/images/M/MV5BOTM5N2ZmZTMtNjlmOS00YzlkLTk3YjEtNTU1ZmQ5OTdhODZhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  Featured:true
});

const movie6 = new Movie ({
  Title: {type:"The Color Purple", required: true},
  Description: {type:"A black Southern woman struggles to find her identity after suffering abuse from her father and others over four decades.", required: true},
  Genre: {
    Name:"Drama",
    Description:"Drama film is a genre that relies on the emotional and relational development of realistic characters. While Drama film relies heavily on this kind of development, dramatic themes play a large role in the plot as well."
  },
  Director: {
    Name: "Steven Spielberg",
    Bio: "A black Southern woman struggles to find her identity after suffering abuse from her father and others over four decades."
  },
  Actors: ["Danny Glover", "Whoopi Goldberg", "Oprah Winfrey"],
  ImagePath:"https://m.media-amazon.com/images/M/MV5BZDRkOWQ5NGUtYTVmOS00ZjNhLWEwODgtOGI2MmUxNTBkMjU0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
  Featured:true
});

const movie7 = new movie({
  Title: {type: "Silence of the Lamb", required: true},
  Description: {type:"A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.", required: true},
  Genre: {
    Name: "Thriller",
    Description:"characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety. "
  },
  Director: {
    Name: "Jonathan Demme",
    Bio:"an American film director, producer and screenwriter of film and television who earned widespread acclaim"
  },
  Actors: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
  ImagePath:"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
  Featured: true
});
const movie8 = new movie({
  Title: {type: "Friday the 13th", required: true},
  Description: {type:"A group of camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp which was the site of a child's drowning and a grisly double murder years before", required: true},
  Genre: {
    Name:"Horror",
    Description:"A horror film is one that seeks to elicit fear in its audience for entertainment purposes. Horror films additionally aim to evoke viewers' nightmares, fears, revulsions and terror of the unknown and macabre"
  },
  Director: {
    Name: "Sean S Cummings",
    Bio:"Sean S. Cunningham had a successful career of starting films cheap and fast. Originally from New York, Cunningham had a vast knowledge of directing films and came to Hollywood."
  },
  Actors: ["Besty Palmer", "Adrienne King", "Jeannine Taylor"],
  ImagePath:"https://m.media-amazon.com/images/M/MV5BNWMxYTYzYWQtNGZmNy00MTg5LTk1N2MtNzQ5NjQxYjQ5NTJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  Featured: true
});

const movie9 = new movie({
  Title: {type: "Purple Rain", required: true},
  Description: {type: "A young musician, tormented by an abusive situation at home, must contend with a rival singer, a burgeoning romance, and his own dissatisfied band, as his star begins to rise.", required: true},
  Genre: {
    Name:"Drama",
    Description:"Drama film is a genre that relies on the emotional and relational development of realistic characters. While Drama film relies heavily on this kind of development, dramatic themes play a large role in the plot as well"
  },
  Director: {
    Name:"Albert Magnoli",
    Bio:"Albert Magnoli graduated from the Film School at the University of Southern California. While there he completed ten student films, culminating with his Thesis Film project Jazz (1979), which he wrote, produced, edited, and directed."
  },
  Actors: ["Prince", "Apollonia Kotero", "Morris Day"],
  ImagePath:"https://m.media-amazon.com/images/M/MV5BYjQ4ZTgwODctY2IzYS00NWQzLWE5OTUtMTk4MWNiZmMxMjI3XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_UY268_CR2,0,182,268_AL_.jpg",
  Featured:true
});

const movie10 = new movie({
  Title: {type:"Beetlejuice", required: true},
  Description: {type:"The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.", required: true},
  Genre: {
    Name:"Comedy",
    Description:"Comedy is a literary genre and a type of dramatic work that is amusing and satirical in its tone, mostly having a cheerful ending."
  },
  Director: {
    Name: "Tim Burton",
    Bio:"Timothy Walter Burton was born in Burbank, California, to Jean Rae (Erickson), who owned a cat-themed gift shop, and William Reed Burton, who worked for the Burbank Park and Recreation Department."
  },
  Actors: ["Alec Baldwin", "Geena Davis", "Michael Keaton"],
  ImagePath:"https://m.media-amazon.com/images/M/MV5BZDdmNjBlYTctNWU0MC00ODQxLWEzNDQtZGY1NmRhYjNmNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  Featured:true
});





let userSchema = mongoose.Schema({
  Username: {type: String, required: true},
  Password: {type: String, required: true},
  Email: {type: String, required: true},
  Birthday: Date,
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});



let userSchema = mongoose.Schema({
  Username: {type: String, required: true},
  Password: {type: String, required: true},
  Email: {type: String, required: true},
  Birthday: Date,
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

const Users = mongoose.model("User", userSchema);

const Misa = new Users({
  Username: {type: "Misabear", required: true},
  Password: {type:"4321", required: true},
  Email: {type:"misagirl12@gmail.com", required: true},
  Birthday: "07/25/2014",
  FavoriteMovies: [{type: mongoose.Schema.Types.ObjectId, ref:'Movie'}]
});

const Brianna = new Users({
  Username: {type:"hillbrianna44", required: true},
  Password: {type:"12345", required: true},
  Email: {type:"hillbrianna44@gmail.com", required: true},
  Birthday:"04/20/1997",
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});
const Kimmi = new User ({
  Username: {type: "MissKimmi", required: true},
  Password: {type:"4567", required: true},
  Email: {type: "misskimmi@gmail.com", required: true},
  Birthday:"07/25/2011",
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});




let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model('User', userSchema);

module.exports.Movie = Movie;
module.exports.User = User;



mongoose.connect('mongodb://localhost:27017/dbname', { useNewUrlParser: true, useUnifiedTopology: true });
