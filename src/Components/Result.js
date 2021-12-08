import "./Result.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import YouTubePlayer from "react-player/youtube";

class Result extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      play: false,
      peredata: "",
    };
  }

  componentDidMount() {
    this.setState({
      peredata: this.state.data,
      data: this.props.data,
    });
  }

  handleMouseEnter() {
    if (this.state.peredata !== this.state.data) {
      console.log("pokemons state has changed.");
      this.setState({
        play: true,
      });
    }
  }

  handleMouseLeave() {
    if (this.state.peredata !== this.state.data) {
      console.log("pokemons state has changed.");
      this.setState({
        play: false,
      });
    }
  }
  render() {
    const { data, play } = this.state;

    let result = "";
    if (data) {
      result = this.state.data.items.map((element) => (
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          key={element.id.videoId}
          className="card"
        >
          <Link to={`/videos/${element.id.videoId}`}>
            <ReactPlayer
              // src="https://www.youtube.com/embed/tcYodQoapMg"
              // url={`https://youtube.com/embed/${element.id.videoId}`}
              // url="https://youtu.be/E07s5ZYygMg?t=10"
              url="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
              playing={play}
              title="YouTube video player"
              pip
              controls="false"
              config={{ file: { forceHLS: true } }}
            ></ReactPlayer>
            {/* <img src={element.snippet.thumbnails.high.url} alt={element.snippet.title} /> */}
            {/* <ReactPlayer
              className="Video"
              src={element.snippet.thumbnails.high.url}
              alt={element.snippet.title}
              url={`https://youtube.com/embed/${element.id.videoId}`}
              url="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"

              key={element.id.videoId}
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
            /> */}
          </Link>

          <h3>{element.snippet.title}</h3>
        </div>
      ));
    }

    return <div className="container">{result}</div>;
  }
}

export default Result;

// class Result extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: "",
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       data: this.props.data,
//     });
//   }
//   render() {
//     const { data } = this.state;
//     let playing = false;
//     let result = "";
//     if (data) {
//       result = this.state.data.items.map((element) => (
//         <div
//           onMouseEnter={() => (playing = true)}
//           onMouseLeave={() => (playing = true)}
//           key={element.id.videoId}
//           className="card"
//         >
//           <Link to={`/videos/${element.id.videoId}`}>
//             {/* <img src={element.snippet.thumbnails.high.url} alt={element.snippet.title} /> */}
//             {/* <ReactPlayer
//               className="Video"
//               src={element.snippet.thumbnails.high.url}
//               alt={element.snippet.title}
//               url={`https://youtube.com/embed/${element.id.videoId}`}
//               url="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"

//               key={element.id.videoId}
//               onMouseOver={(e) => e.target.play()}
//               onMouseOut={(e) => e.target.pause()}
//             /> */}
//             <ReactPlayer
//               // src="https://www.youtube.com/embed/tcYodQoapMg"
//               url={`https://youtube.com/embed/${element.id.videoId}`}
//               playing={`${playing}`}
//               title="YouTube video player"
//               pip
//               controls="false"
//               config={{ file: { forceHLS: true } }}
//             ></ReactPlayer>
//           </Link>

//           <h3>{element.snippet.title}</h3>
//         </div>
//       ));
//     }

//     return <div className="container">{result}</div>;
//   }
// }

// export default Result;
