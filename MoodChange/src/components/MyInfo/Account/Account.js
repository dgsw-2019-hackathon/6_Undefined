import React, { Component } from 'react';
import './Account.scss';
import fixIcon from "../../../image/수정연필.png";

class Account extends Component {
    render() {
        return (
            <div className="Account">
                <div className="Account-Id">
                    <div className="Account-Id-left">ID</div>
                    <div className="Account-Id-right">user0000</div>
                </div>
                <div className="Account-Pw">
                    <div className="Account-Pw-left">PW</div>
                    <div className="Account-Pw-right">******</div>
                </div>
                <div className="Account-Fix">
                    <button type="button" className="Account-Fix-btn">
                        <img className="Account-Fix-btn-icon" src={fixIcon}/> 프로필 수정
                    </button>
                </div>
            </div>
        );
    }
}

export default Account;