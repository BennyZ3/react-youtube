import './Result.css';
import { Component, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';

const Result = () => {
  const [data, setData] = useState('');
  const { search } = useParams();
  let result = null;

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${process.env.REACT_APP_API_KEY}`
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
    result = data.items.map((element) => (
      <div key={element.id.videoId} className="card">
        <Link to={`/videos/${element.id.videoId}`}></Link>
        {/* {
          <img
            src={element.snippet.thumbnails.high.url}
            alt={element.snippet.title}
          />
        } */}

        {/* <ReactPlayer
          className="Video"
          url={`https://youtu.be/${element.id.videoId}`}
          key={element.id.videoId}
          onMouseOver={(e) => e.target.play()}
          onMouseOut={(e) => e.target.pause()}
        /> */}

        <video
          key={element.id.videoId}
          onMouseOver={(e) => e.target.play()}
          onMouseOut={(e) => e.target.pause()}
          src={`https://youtu.be/${element.id.videoId}`}
        />

        <h3>{element.snippet.title}</h3>
      </div>
    ));
  }

  return <div className="Result">{result ? result : 'Loading'}</div>;
  // }
};

export default Result;
