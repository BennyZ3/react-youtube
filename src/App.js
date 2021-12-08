import { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Result from "./Components/Result";
import About from "./Components/About";
import Search from "./Components/Search";
import Video from "./Components/Video";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      DataIsLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=ariana+grande
      &key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          data: json,
          DataIsLoaded: true,
        });
      });
  }

  render() {
    const { DataIsLoaded, data } = this.state;
    // console.log(data);

    if (!DataIsLoaded)
      return (
        <div>
          <h1> Pleases wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <Nav />
        <Search />

        <main>
          <Routes>
            <Route path="/videos" element={<Result data={data} />} />
            <Route path="/videos/:id" element={<Video />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
