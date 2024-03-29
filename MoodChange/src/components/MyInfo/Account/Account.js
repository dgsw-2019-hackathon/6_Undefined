import React, { Component } from 'react';
import './Account.scss';
import fixIcon from "../../../image/수정연필.png";
import out from "../../../image/out.png";

class Account extends Component {
    render() {
        return (
            <div className="Account">
                <div className="Account-UserName">
                    <div className="Account-UserName-left">사용자명</div>
                    <div className="Account-UserName-right">안채원</div>
                </div>
                <div className="Account-Id">
                    <div className="Account-Id-left">ID</div>
                    <div className="Account-Id-right">UserId</div>
                </div>
                <div className="Account-Pw">
                    <div className="Account-Pw-left">PW</div>
                    <div className="Account-Pw-right">
                        <input className="Account-Pw-right-input" placeholder="******" />
                    </div>
                </div>
                <div className="Account-Fix">
                    <button type="button" className="Account-Fix-btn">
                        <img className="Account-Fix-btn-icon" src={fixIcon} alt=""/> 프로필 수정
                    </button>
                </div>
                <img src={ out } className="Out" alt=""/>
            </div>
        );
    }
}

export default Account;