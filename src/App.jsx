import { useState } from "react";

const initialFilm = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

export default function App() {
  // Setto valore iniziale
  const [genre, setGenre] = useState("");

  return (
    <div>
      <h1>Filtro</h1>
      <div>
        <label>Choose Genre</label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Tutti</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
      </div>
      <ul>
        {initialFilm.map((film, index) => (
          <li key={index}>
            <h4>{film.title}</h4>
            <h6>{film.genre}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
}
