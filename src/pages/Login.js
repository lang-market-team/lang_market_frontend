import React, { Component } from 'react';
import "./pages.css";
import LoginBox from '../components/LoginBox';
import logoLangMarket from '../images/Logo_LangMarket.PNG'
class Login extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-7'>
            <img src={logoLangMarket} alt='Logo'/>
          </div>
          <div className="col-md-5 login-box-area">
            <LoginBox />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
