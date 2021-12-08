import "./Video.css";
import YouTube from "react-youtube";
import { useParams } from "react-router";

const Video = (props) => {
  // console.log(props);
  // const { id } = props.match.params;
  const params = useParams();
  return (
    <div className="Video-container">
      <YouTube className="Video" videoId={params.id} />
    </div>
  );
};

export default Video;
