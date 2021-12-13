import "./Search.css";
import { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,

      search: "",
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
          <input type="text" name="searchBar" id="searchBar" onChange={this.handleSearch} />

          <Link to={newURL}>
            <button>→</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Search;
