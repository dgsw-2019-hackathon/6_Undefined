import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {
    render() {
        return (
            <div className="SignUp">
                <div className="SignUp-Form">
                    <div className="SignUp-Form-UserName">
                        <div className="SignUp-Form-UserName-value">Username</div>
                        <input type="text" className="SignUp-Form-UserName-box" placeholder="아이디"/>
                    </div>
                    <div className="SignUp-Form-Id">
                        <div className="SignUp-Form-Id-value">ID</div>
                        <input type="text" className="SignUp-Form-Id-box" placeholder="이름"/>
                    </div>
                    <div className="SignUp-Form-Password">
                        <div className="SignUp-Form-Password-pw">
                            <div className="SignUp-Form-Password-pw-value">PASSWORD</div>
                            <input type="password" className="SignUp-Form-Password-pw-box" placeholder="비밀번호"/>
                        </div>
                        <div className="SignUp-Form-Password-pwRepeat">
                            <div className="SignUp-Form-Password-pwRepeat-value">PASSWORD(repeat)</div>
                            <input type="password" className="SignUp-Form-Password-pwRepeat-box" placeholder="비밀번호 재확인"/>
                        </div>
                    </div>
                    <input type="button" className="SignUp-Form-Create" value="Create Account"/>
                </div>
            </div>
        );
    }
}

export default SignUp;