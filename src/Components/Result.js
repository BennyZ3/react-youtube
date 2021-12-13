import "./Result.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ResultVideo from "./ResultVideo";

const Result = (props) => {
  const [data, setData] = useState("");

  const { search } = useParams();

  let result = null;

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=12&part=snippet&q=${search}&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.log("error");
      });
  }, [search]);

  if (data) {
    result = data.items.map((element) => (
      <div key={element.etag} className="vid">
        <button className="button" onClick={() => props.handleFav(element)}>
          Add To Favorites
        </button>
        <ResultVideo vid={element} />
      </div>
    ));
  }

  return (
    <div className="Result">
      <div className="videos">{result ? result : "Loading"}</div>
    </div>
  );
};

export default Result;
