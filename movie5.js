// Step 1: Switch to Streaming Database
//use streamingDB;

// Step 2: Insert Movies Metadata
db.movies.insertMany([
  {
    movieId: "MOV101",
    title: "Inception",
    genres: ["Sci-Fi", "Action", "Thriller"],
    releaseYear: 2010,
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    avgRating: 8.8,
    tags: ["mind-bending", "dreams", "heist"]
  },
  {
    movieId: "MOV102",
    title: "Interstellar",
    genres: ["Sci-Fi", "Drama", "Adventure"],
    releaseYear: 2014,
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway"],
    avgRating: 8.7,
    tags: ["space", "time travel", "future"]
  }
]);

// Step 3: Record User Watch Activity for recommendations
db.userActivity.insertMany([
  {
    userId: "USR2001",
    movieId: "MOV101",
    watchProgressPercentage: 100,
    userRating: 5,
    lastWatched: new Date("2026-09-19T20:30:00Z")
  }
]);

// Step 4: Recommendation Query - Find top-rated 'Sci-Fi' movies
db.movies.find(
  { genres: "Sci-Fi", avgRating: { $gte: 8.5 } },
  { title: 1, genres: 1, avgRating: 1, _id: 0 }
).sort({ avgRating: -1 });