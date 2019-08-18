import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import Search from "./components/search/search.component";
import { searchMonster } from "./components/util/search";
import "./App.css";

class App extends Component {
  state = {
    monsters: [],
    search: ""
  };

  handleSearch = ({ currentTarget: input }) => {
    const search = input.value;
    this.setState({ search });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err =>
        console.log("Something went wrong unable to proceed", err.message)
      );
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = searchMonster(monsters, search);
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search
          placeholder="search monsters"
          onSearch={this.handleSearch}
          value={search}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
