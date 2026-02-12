import { useEffect, useState } from "react";

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
  // mostro tutto l'array
  const [result, setResult] = useState(initialFilm);

  const [filterFilm, setFilterFilm] = useState(result);

  useEffect(() => {
    // SE l'opzione tutti viene selezionato allora mostra tutti i film
    if (genre === "Tutti") {
      setResult(initialFilm);
    } else {
      // altrimenti mostra i film selezionati (.filter crea un nuovo array visualizzando solo gli elementi interessati )
      const updatedFilterFilm = result.filter((film) => film.genre === genre);

      setFilterFilm(updatedFilterFilm);
    }
    // useEffect osserva questa variabile
  }, [genre]);

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
        {filterFilm.map((film, index) => (
          <li key={index}>
            <h4>{film.title}</h4>
            <h6>{film.genre}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
}
