import { Component } from "react";

class AboutCard extends Component {
  constructor(props) {
    super();
  }
  render() {
    console.log(this.props.collaborators[0]);
    let aboutCards = this.props.collaborators.map((person) => {
      let { firstName, lastName, github, linkedIn, bio, image } = person;
      return (
        <div className="aboutCard">
          <img src={image} />
          <h2>{firstName + " " + lastName}</h2>
          <p>
            <strong>GitHub: </strong>
            <a href={github} target="_blank">
              {github}
            </a>
          </p>
          <p>
            <strong>LinkedIn: </strong>
            <a href={linkedIn} target="_blank">
              {linkedIn}
            </a>
          </p>
          <p>
            <strong>Bio: </strong>
            {bio}
          </p>
        </div>
      );
    });
    return <>{aboutCards}</>;
  }
}

export default AboutCard;
