import { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Result from './Components/Result';
import Video from './Components/Video';
import About from './Components/About';
import Search from './Components/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Search />
                  <Result />
                </>
              }
            />
            <Route
              path="/search/:id"
              element={
                <>
                  <Search />
                  <Result />
                </>
              }
            />
            <Route
              path="/video/:id"
              element={
                <>
                  <Search />
                  <Video />
                </>
              }
            />
            <Route path="/about/" element={<About />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
