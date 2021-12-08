import "./Result.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";

class Result extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    this.setState({
      data: this.props.data,
    });
  }
  render() {
    const { data } = this.state;

    let result = "";
    if (data) {
      result = this.state.data.items.map((element) => (
        <div key={element.id.videoId} className="card">
          <Link to={`/videos/${element.id.videoId}`}>
            <img
              src={element.snippet.thumbnails.high.url}
              alt={element.snippet.title}
            />
          </Link>

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

    return <div className="container">{result}</div>;
  }
}

export default Result;
