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
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image:
            "https://media-exp1.licdn.com/dms/image/C5603AQFCryNNidn31g/profile-displayphoto-shrink_800_800/0/1517428439754?e=1645056000&v=beta&t=zqfNbVs7_DUfsQHOBM2WOyN9uPl0BGHvrLgDOFnXEUQ",
        },
        {
          firstName: "Dylan",
          lastName: "Lovell",
          github: "https://github.com/DylanLovell93",
          linkedIn: "https://www.linkedin.com/in/dylan-lovell-9789b4219/",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image:
            "https://media-exp1.licdn.com/dms/image/C4E03AQF4zXQe9y044Q/profile-displayphoto-shrink_800_800/0/1628524548948?e=1645056000&v=beta&t=BsKSsZL5e15wQ_xoEK-qZ4Y-IKLQLsMK6I6vq7YYC2s",
        },
        {
          firstName: "Younes",
          lastName: "Tahiri",
          github: "https://github.com/Ytahirioct82",
          linkedIn: "https://www.linkedin.com/in/younes-tahiri-448ab4214/",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image:
            "https://media-exp1.licdn.com/dms/image/C4E03AQGy1AaDqS5Kqw/profile-displayphoto-shrink_800_800/0/1623948941884?e=1645056000&v=beta&t=KrJqcGT5s4BXC5L_A5XCxt6Ew-ce8j4BF8HUKBAvyr4",
        },
      ],
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
