import './Nav.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import logo from './logo.png';

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
        <Link to="/About">
          <div id="about">About</div>
        </Link>
      </div>
    );
  }
}

export default Nav;
