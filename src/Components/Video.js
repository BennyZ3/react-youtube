import "./Video.css";
import YouTube from "react-youtube";
import { useParams } from "react-router";
import Comments from "./Comments";
import Description from "./Description";

const Video = (props) => {
  const params = useParams();
  console.log(params.snippet);
  return (
    <>
      <div className="Video-container">
        <YouTube className="Video" videoId={params.id} />
        <Description videoId={params.id} />
      </div>
      <Comments videoId={params.id} />
    </>
  );
};

export default Video;
