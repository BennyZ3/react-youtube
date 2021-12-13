import "./About.css";

import { Component } from "react";
import AboutCard from "./AboutCard";

class About extends Component {
  constructor() {
    super();
    this.state = {
      collaborators: [
        {
          firstName: "Benny",
          lastName: "Zheng",
          github: "https://github.com/BennyZ3",
          linkedIn: "https://www.linkedin.com/in/benny-zheng-b1768569/",
          bio: "",
        },
        {
          firstName: "Dylan",
          lastName: "Lovell",
          github: "https://github.com/DylanLovell93",
          linkedIn: "https://www.linkedin.com/in/dylan-lovell-9789b4219/",
          bio: "",
        },
        {
          firstName: "Younes",
          lastName: "Tahiri",
          github: "https://github.com/Ytahirioct82",
          linkedIn: "https://www.linkedin.com/in/younes-tahiri-448ab4214/",
          bio: "",
        },
      ],
      results: [],
    };
  }

  render() {
    return (
      <div className="About">
        <h1>About</h1>
        <div className="aboutCards">
          <AboutCard collaborators={this.state.collaborators} />
        </div>
      </div>
    );
  }
}

export default About;
