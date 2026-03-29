/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */
const movieModel = {
   tt0371746: {  
      imdbID:"tt0371746",
      Title:"Iron Man",
      Released:"2008-05-02",
      Runtime: 126,
      Genres:["Action", "Adventure", "Sci-Fi"],
      Directors:["Jon Favreau"],
      Writers:["Mark Fergus", "Hawk Ostby", "Art Marcum"],
      Actors:["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard"],
      Plot:"After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      Poster:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
      Metascore:79,
      imdbRating:7.9
   },
   tt1375666: {
      imdbID:"tt1375666",
      Title: "Inception",
      Released: "2010-07-16",
      Runtime: 148,
      Genres: ["Action", "Adventure", "Sci-Fi"],
      Directors: ["Christopher Nolan"],
      Writers: ["Christopher Nolan"],
      Actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      Plot: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      Metascore: 74,
      imdbRating: 8.8
   },
   tt0133093: {
      imdbID:"tt0133093",
      Title: "The Matrix",
      Released: "1999-03-31",
      Runtime: 136,
      Genres: ["Action", "Sci-Fi"],
      Directors: ["Lana Wachowski", "Lilly Wachowski"],
      Writers: ["Lana Wachowski", "Lilly Wachowski"],
      Actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      Plot: "A hacker discovers the reality he lives in is a simulation and joins a rebellion against the machines controlling humanity.",
      Poster: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: 73,
      imdbRating: 8.7
   }
};

module.exports = movieModel;