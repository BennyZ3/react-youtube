import { Component } from "react";
import Comment from "./Comment";
import "./Comments.css";

class Comments extends Component {
  constructor() {
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
  //Probably change to a way for comments to be saved
  //I think can be done by converting into a json, but
  //not sure how it will be stored on a deployed version.
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
