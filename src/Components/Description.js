import { Component } from "react";

class Description extends Component {
  constructor(props) {
    super();
    this.state = {
      data: "",
      result: "",
    };
  }
  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.props.videoId}&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((result) => result.json())
      .then((json) => {
        const info = json.items[0].snippet;
        this.setState({
          data: json,
          result: (
            <div className="info">
              <p className="title">{info.title}</p>
              <p className="channel">{info.channelTitle}</p>
              <p className="description">{info.description}</p>
            </div>
          ),
        });
      });
  }
  render() {
    return <>{this.state.result}</>;
  }
}

export default Description;
