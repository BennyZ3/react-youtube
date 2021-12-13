import "./Result.css";
import "./Favorite.css";
import ResultVideo from "./ResultVideo";
let favorites = null;

const Favorite = (props) => {
  console.log(props.fav);
  if (props.fav.length > 0) {
    favorites = props.fav.map((video) => (
      <div className="favVid">
        <button className="favButton" onClick={() => props.handleDelete(video)}>
          Remove
        </button>
        <ResultVideo vid={video} />
      </div>
    ));
  }

  return (
    <details className="Favorite">
      <summary>Favorite Videos</summary>
      {favorites ? favorites : "Loading"}
    </details>
  );
};

export default Favorite;
