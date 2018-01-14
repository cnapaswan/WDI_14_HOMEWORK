CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(300),
  poster VARCHAR(300),
  release VARCHAR(300),
  genre VARCHAR(300),
  language VARCHAR(300),
  director VARCHAR(300),
  writer VARCHAR(300),
  actors VARCHAR(300),
  plot VARCHAR(1000),
  imdbID VARCHAR(300)
);
