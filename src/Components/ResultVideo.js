import { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const ResultVideo = (props) => {
  const [play, setPlay] = useState(false);
  return (
    <div className="card" key={props.vid.id.videoId}>
      <ReactPlayer
        className="player"
        key={props.vid.id.videoId}
        onMouseEnter={() => setPlay(true)}
        onMouseLeave={() => setPlay(false)}
        modestbranding="0"
        url={"https://youtube.com/embed/" + props.vid.id.videoId}
        playing={play}
        showinfo="0"
        volume="0"
        frameborder="0"
        width="320px"
        height="200px"
      />

      <div className="link">
        <Link to={`/videos/${props.vid.id.videoId}`}>
          <h3>{props.vid.snippet.title}</h3>
        </Link>
      </div>
    </div>
  );
};
export default ResultVideo;

{
  /* {<img src={props.vid.snippet.thumbnails.high.url} alt={props.vid.snippet.title} />} */
}

{
  /* <img src={element.snippet.thumbnails.high.url} alt={element.snippet.title} /> */
}
{
  /* <ReactPlayer
          className="Video"
          src={element.snippet.thumbnails.high.url}
          alt={element.snippet.title}
          url={`https://youtube.com/embed/${element.id.videoId}`}
          url="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"

          key={element.id.videoId}
          onMouseOver={(e) => e.target.play()}
          onMouseOut={(e) => e.target.pause()}
        /> */
}
