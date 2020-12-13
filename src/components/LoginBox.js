import React, { Component } from "react";
import "./components.css";
import serverAddress from "../serverConnection";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      statusLogin: "",
    };
  }
  componentDidMount() {
    console.log(this.context);
  }
  login() {
    fetch(serverAddress)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data);
        if (data === 1) {
          this.setState({ statusLogin: "Login success" });
        } else {
          this.setState({ statusLogin: "Username or password is wrong" });
        }
      }
      )
  }

  render() {
    return (
      <div className="container login-box">
        <h2>Login with any username or password</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="number"
              className="form-control"
              id="username"
              placeholder="Enter username"
              ref={(ref) => {
                this.username = ref;
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              ref={(ref) => {
                this.password = ref;
              }}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={this.login}>
            Login
          </button>{" "}
          <p className="text-danger">{this.state.statusLogin}</p>
        </form>
      </div>
    );
  }
}
export default Login;
