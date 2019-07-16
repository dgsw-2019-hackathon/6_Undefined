import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="Login-Form">
                    <div className="Login-Form-IdPw">
                        <div className="Login-Form-IdPw-onlyLine1">
                            <div className="Login-Form-IdPw-onlyLine1-value">ID</div>
                            <input type="text" className="Login-Form-IdPw-onlyLine1-box" placeholder="아이디"/>
                        </div>
                        <div className="Login-Form-IdPw-onlyLine2">
                            <div className="Login-Form-IdPw-onlyLine2-value">PASSWORD</div>
                            <input type="password" className="Login-Form-IdPw-onlyLine2-box" placeholder="비밀번호"/>
                        </div>
                        <input className="Login-Form-IdPw-btn" type="button" value="LOGIN"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;