import { Component } from "react";

class Description extends Component {
  constructor(props) {
    super();
    this.state = {
      data: "",
      showMore: false,
      title: "",
      channel: "",
      description: "",
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
          title: info.title,
          channel: info.channelTitle,
          description: info.description,
        });
      });
  }

  render() {
    return (
      <>
        <div className="info">
          <p className="title">{this.state.title}</p>
          <p className="channel">{this.state.channel}</p>
          <p className="description">
            {this.state.showMore
              ? this.state.description + "\n"
              : this.state.description.split("\n").slice(0, 4).join(`\n`)}
            <button
              className="showMoreBtn"
              onClick={() => this.setState({ showMore: !this.state.showMore })}
            >
              {this.state.showMore ? "SHOW LESS" : "SHOW MORE"}
            </button>
          </p>
        </div>
      </>
    );
  }
}

export default Description;
