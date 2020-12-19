import React, { Component } from 'react';
import "./pages.css";
import LoginBox from '../components/LoginBox';
import logoLangMarket from '../images/logoLangMarket.png'
class Login extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-7'>
            <img className="img-fluid" src={logoLangMarket} alt='Logo'/>
          </div>
          <div className="col-sm-5 login-box-area">
            <LoginBox />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
