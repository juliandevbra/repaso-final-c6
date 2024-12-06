import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";

const Card = ({ char }) => {
  const { dispatch, state } = useCharStates();

  const findFav = state.favs.find((fav) => fav.id === char.id);
  // console.log(findFav);
  const toggleFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: char });
  };

  return (
    <div>
      <Link to={`/detail/${char.id}`}>
        <img src={char.image} alt={char.name} />
        <h3>{char.name}</h3>
      </Link>
      <button onClick={toggleFav}>{findFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;

// if (findFav) {
//   dispatch({ type: "DELETE_FAV", payload: char });
// } else {
//   dispatch({ type: "ADD_FAV", payload: char });
// }
// setFavs((favs) => [...favs, char]);
