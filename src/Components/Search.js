import "./Search.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import searchImage from "./search.png";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,

      search: "",
      d96531cfb74766e3f85985541b7962fe0047506,
    };
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    const { search } = this.state;

    const newURL = search && "/videos/search_query=" + search;

    return (
      <div className="Search">
        <form>
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Search"
            autocomplete="off"
            onChange={this.handleSearch}
          />
          <Link to={newURL}>
            <button>
              <img src={searchImage} />
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Search;
