import React, { Component } from 'react';
import axios from 'axios';
import { SERVER } from '../../../config/config.json';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';
// import sha512 from 'js-sha512';
import './Login.scss';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: '',
        pw: ''
      };
      console.log(props);
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    handleLogin = async _ => {
        await axios
          .post(`${SERVER}/api/login/login_process`, {
            user_id: this.state.id,
            user_password: this.state.pw
          })
          .then(async e => {
            console.log(e.data.data);
            await Swal.fire({
                type: 'success',
                title: '띵동',
                text: '로그인 성공!'
              });
            localStorage.setItem('token', e.data.data);
            console.log(localStorage.getItem('token'));
            this.props.history.push('/');
          })
          .catch(e => {
            console.log(e);
            Swal.fire({
                type: 'error',
                title: '로그인 실패',
                text: e.response.status
              });
            localStorage.removeItem('token');
          });
      };

    render() {
        return (
            <div className="Login">
                <div className="Login-Form">
                    <div className="Login-Form-IdPw">
                        <div className="Login-Form-IdPw-onlyLine1">
                            <div className="Login-Form-IdPw-onlyLine1-value">ID</div>
                            <input
                              type="text" className="Login-Form-IdPw-onlyLine1-box" placeholder="아이디" name="id" onChange={this.handleChange} autoComplete="off"
                              value={this.state.id} 
                            />
                        </div>
                        <div className="Login-Form-IdPw-onlyLine2">
                            <div className="Login-Form-IdPw-onlyLine2-value">PASSWORD</div>
                            <input
                              type="password" className="Login-Form-IdPw-onlyLine2-box" placeholder="비밀번호" name="pw" onChange={this.handleChange} autoComplete="off"
                              value={this.state.pw}
                            />
                        </div>
                        <input className="Login-Form-IdPw-btn" type="button" value="LOGIN" onClick={this.handleLogin}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);