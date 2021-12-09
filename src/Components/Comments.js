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
          <label>
            Name:
            <p />
            <input id="name" name="name" type="text" />
          </label>
          <label>
            Comment:
            <p />
            <textarea
              cols="80"
              rows="5"
              id="comment"
              name="comment"
              className="commentBox"
              type="text"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div>
          <Comment comments={this.state.comments} />
        </div>
      </div>
    );
  }
}
export default Comments;
