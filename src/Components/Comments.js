import { Component } from "react";
import Comment from "./Comment";
import "./Comments.css";

class Comments extends Component {
  constructor(props) {
    super();
    this.state = {
      comments: [
        {
          name: "test",
          comment: "test comment",
        },
      ],
    };
  }
  componentDidMount() {
    this.commentsData = JSON.parse(localStorage.getItem(this.props.videoId));

    if (localStorage.getItem(this.props.videoId)) {
      this.setState({
        comments: this.commentsData.comments,
      });
    } else {
      this.setState({
        comments: [],
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(this.props.videoId, JSON.stringify(nextState));
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let e = event.target;
    if (e.name.value && e.comment.value) {
      this.setState({
        comments: [
          ...this.state.comments,
          {
            name: e.name.value,
            comment: e.comment.value,
          },
        ],
      });
      e.comment.value = "";
    }
  };

  render() {
    return (
      <div className="commentSection">
        <form onSubmit={this.handleSubmit}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            style={{
              fontFamily: "Arial",
              color: "#FFFFFF",
              backgroundColor: "#181818",
            }}
            contentEditable
          />
          <textarea
            id="comment"
            name="comment"
            className="commentBox"
            type="text"
            placeholder="Add a public comment..."
            style={{ fontFamily: "Arial", color: "#FFFFFF" }}
            contentEditable
          />
          <button type="submit">COMMENT</button>
        </form>
        <div>
          <Comment comments={this.state.comments} />
        </div>
      </div>
    );
  }
}
export default Comments;
