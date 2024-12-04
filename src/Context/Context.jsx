import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

const CharStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const Context = ({ children }) => {
  const [favs, setFavs] = useState(lsFavs);
  const [chars, setChars] = useState([]);
  const [theme, setTheme] = useState("");
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data.results);
        setChars(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CharStates.Provider value={{ favs, chars, setFavs }}>
      {children}
    </CharStates.Provider>
  );
};
export default Context;

export const useCharStates = () => useContext(CharStates);
