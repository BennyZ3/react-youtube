import { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super();
  }

  render() {
    let commentsDisplay = this.props.comments.map((element) => {
      let { name, comment } = element;
      return (
        <div className="comment">
          <p className="commentName">{name}</p>
          <p className="commentContent">{comment}</p>
        </div>
      );
    });
    return <>{commentsDisplay}</>;
  }
}

export default Comment;
