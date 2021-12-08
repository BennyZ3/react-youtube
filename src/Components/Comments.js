import { Component } from "react";
import "./Comments.css";

class Comments extends Component {
  render() {
    return (
      <div className="commentSection">
        <form>
          <label>
            Name:
            <p />
            <input id="name" name="name" type="text" />
          </label>
          <label>
            Comment:
            <p />
            <input id="comment" name="comment" type="text" />
          </label>
          <button type="submit" onSubmit={""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Comments;
