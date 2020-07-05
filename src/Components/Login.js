import React, { Component } from "react";
import createHistory from "history/createBrowserHistory";
import Header from "./Header";

const history = createHistory();
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", peoples: [], wrong: false };
  }
  inputFocus = () => {
    this.setState({ wrong: false });
  };
  getName = event => {
    this.setState({ username: event.target.value });
  };
  getPassword = event => {
    this.setState({ password: event.target.value });
  };
  Login = () => {
    fetch("https://swapi.dev/api/people")
      .then(res => res.json())
      .then(data => {
        this.setState({ peoples: data.results });
        console.log(this.state.peoples);
        this.state.peoples.map(people => {
          if (
            people.name === this.state.username &&
            people.birth_year === this.state.password
          ) {
            localStorage.setItem("username", this.state.username);
            this.props.history.push("/search");
            console.log("SUCCESS");
          } else {
            this.setState({ wrong: true });
          }
        });
      })

      .catch(console.log);
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="login">
          <form>
            <h2>Login</h2>
            <br></br>
            <br></br>
            <label for="male">Name</label>
            <input
              className="user"
              type="text"
              name="username"
              placeholder="Name"
              value={this.state.username}
              onChange={this.getName}
              onFocus={this.inputFocus}
            />
            <br></br>
            <br></br>
            <label>Password</label>
            <input
              className="user"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.getPassword}
              onFocus={this.inputFocus}
            />
            <br></br>
            {this.state.wrong === true ? (
              <p className="wrong">** Incorrect username or password</p>
            ) : null}
            <br></br>
          </form>
          <button onClick={this.Login} className="loginbutton">
            Login
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
