import "./Video.css";
import YouTube from "react-youtube";
import { useParams } from "react-router";
import Comments from "./Comments";
import Description from "./Description";
import Favorite from "./Favorite";

const Video = (props) => {
  const params = useParams();
  return (
    <div className="videoPage">
      <div className="Video-container">
        <YouTube className="Video videoPageVideo" videoId={params.id} />
        <Description videoId={params.id} />
        <Comments videoId={params.id} />
      </div>
      <Favorite fav={props.fav} className="videoPageFav" />
    </div>
  );
};

export default Video;
