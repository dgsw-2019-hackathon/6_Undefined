import React, { Component } from 'react';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import './LoginSignUp.scss';

export default class LoginSignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLogin: true
    }
  }

  handleSwitch = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }

  render() {
    return (
      <div className="loginSignUp">
        <div className="loginSignUp-LoginForm">
          <div className="loginSignUp-LoginForm-input">
            <div className={`loginSignUp-LoginForm-input-login ${this.state.isLogin && 'select'}`}  onClick={this.handleSwitch}>Login</div>
            <div className={`loginSignUp-LoginForm-input-signUp ${!this.state.isLogin && 'select'}`} onClick={this.handleSwitch}>Sign Up</div>
          </div>
          <div className="loginSignUp-form">
            <div className="loginSignUp-form-message">Mood Change</div>
            {
              this.state.isLogin === true ? <Login /> : <SignUp />
            }
          </div>
        </div>
      </div>
    )
  }
}
