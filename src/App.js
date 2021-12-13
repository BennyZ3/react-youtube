import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Result from "./Components/Result";
import About from "./Components/About";
import Video from "./Components/Video";
import PopularVideo from "./Components/PopularVideos";
import { useState } from "react";

const App = () => {
  const [fav, setFav] = useState("");

  const handleFav = (video) => {
    setFav([...fav, video]);
  };

//   console.log(fav);

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route exact path="/" element={<PopularVideo handleFav={handleFav} fav={fav} />} />
          <Route path="/videos/search_query=:search" element={<Result handleFav={handleFav} fav={fav} />} />
          <Route path="/videos/:id" element={<Video />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
