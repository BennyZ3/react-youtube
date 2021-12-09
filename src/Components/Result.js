import "./Result.css";
import { Component, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import ResultVideo from "./ResultVideo";

const Result = () => {
  const [data, setData] = useState("");
  const [play, setPlay] = useState(false);
  const { search } = useParams();


  let result = null;

  useEffect(() => {
    fetch(

      `https://youtube.googleapis.com/youtube/v3/search?maxResults=6&part=snippet&q=${search}&key=${process.env.REACT_APP_API_KEY}`

    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.log('error');
      });
  }, [search]);

  if (data) {
    result = data.items.map((element) => <ResultVideo vid={element} />);
  }
  return <div className="Result">{result ? result : "Loading"}</div>;
};

export default Result;
