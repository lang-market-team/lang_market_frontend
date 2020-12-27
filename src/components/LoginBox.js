import React, { Component } from "react";
import "./components.css";
import serverAddress from "../serverConnection";
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom'
import "./../css/login.css"

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      statusLogin: "",
      redirect: false,
    };
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }


  login() {
    fetch(serverAddress + "api/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.username.value,
        pass: this.password.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error == null) {
          const cookies = new Cookies();
          cookies.set('id_user',String(data.id_user),{path: '/'});
          cookies.set('first_name',String(data.first_name),{path: '/'});
          cookies.set('last_name',String(data.last_name),{path: '/'});
          cookies.set('type_account',String(data.type_account),{path: '/'});
          this.setRedirect()
        } else {
          this.setState({ statusLogin: "Tên đăng nhập hoặc mật khẩu sai" });
        }
      });
  }

  render() {
    return (
      <div className="container login-box">
        <h2>Đăng nhập</h2>
        <p className="text-danger">admin admin</p>
        <p className="text-danger">customer1 customer1</p>
        <form>
          <div className="form-group text-left">
            <label htmlFor="username">Tên đăng nhập:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Nhập tên đăng nhập"
              ref={(ref) => {
                this.username = ref;
              }}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="password">Mật khẩu:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Nhập mật khẩu"
              ref={(ref) => {
                this.password = ref;
              }}
            />
          </div>
          {this.renderRedirect()}
          <button type="button" className="btn btn-primary" onClick={this.login}>
            Đăng nhập
          </button>{" "}
          <p className="text-danger">{this.state.statusLogin}</p>
        </form>
      </div>
    );
  }
}
export default LoginBox;
