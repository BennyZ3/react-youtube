import './Nav.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import logo from './logo.png';
import searchLogo from './about.png';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <Link to="/">
          <div className="icon">
            <img src={logo} alt="logo" />
            <div id="text">YouTube</div>
          </div>
        </Link>
        <Search />
        <div id="about">
          <Link to="/About">
            <div id="About">About</div>
            <img id="icon" src={searchLogo} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
