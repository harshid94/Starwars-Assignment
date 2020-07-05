import React, { Component } from "react";
import image from "../Assets/starwars_logo.png";

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: [],
      showable: {},
      shouldShow: false,
      isShowable: false,
      count: 0,
      api_count: 0
    };
  }
  getInfo = () => {
    fetch("https://swapi.dev/api/planets/")
      .then(res => res.json())
      .then(data => {
        this.setState({ results: data.results });
      });
  };
  handleInput = () => {
    this.setState({ isShowable: false });
    if (this.search.value === "") {
      this.setState({ shouldShow: false });
    }
    this.setState({ query: this.search.value, shouldShow: true }, () => {
      if (this.state.query && this.state.shouldShow === true) {
        this.getInfo();
      } else if (!this.state.query) {
      }
    });
  };
  handleClick = r => {
    this.setState({ isShowable: true });
    this.search.value = r.name;
    let username = localStorage.getItem("username");
    if (username === "Luke Skywalker") {
      this.setState({ count: this.state.count + 1 });
      this.setState({ shouldShow: false });

      this.setState({ showable: r });
    } else {
      if (this.state.count < 15) {
        this.setState({ count: this.state.count + 1 });
        this.setState({ shouldShow: false });

        this.setState({ showable: r });
      } else {
        alert("you had completed 15 searches");
      }
    }
  };
  logOut = () => {
    localStorage.removeItem("username");
    this.props.history.push("/");
  };
  render() {
    let filteredOptions = this.state.results.filter(result => {
      return (
        result.name.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1
      );
    });

    const options = filteredOptions.map(r => (
      <li className="" key={r.name} onClick={() => this.handleClick(r)}>
        <div className="border-container">
          <div className="border">{r.name}</div>
        </div>
      </li>
    ));
    return (
      <div>
        <div className="header">
          <img src={image} className="logo"></img>
          <span className="loginas">
            Hi {localStorage.getItem("username")} !
          </span>
          <div className="logout" onClick={this.logOut}>
            logout
          </div>
        </div>

        <form>
          <input
            className="center-block"
            placeholder="Search for your favourite STARWARS PLANETS ..."
            ref={input => (this.search = input)}
            onChange={this.handleInput}
          />
          <ul>{this.state.shouldShow === true ? options : null}</ul>
        </form>
        {this.state.isShowable === true ? (
          <div className="content">
            <div className="background"></div>
            <h1>{this.state.showable.name}</h1>
            <p>
              <span>{this.state.showable.name}</span> has a diameter of{" "}
              <span>{this.state.showable.diameter}</span> km. The population is{" "}
              <span>{this.state.showable.population}</span> . The climate in
              this planet is <span>{this.state.showable.climate}</span>. Its
              rotational period is{" "}
              <span>{this.state.showable.rotation_period}</span> hours and its
              orbital period is{" "}
              <span>{this.state.showable.orbital_period}</span> days.
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}
export default SearchComponent;
