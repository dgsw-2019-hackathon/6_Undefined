import React, { Component } from 'react';
import './Profile.scss';
import profile from "../../../image/1.jpg";
import fixIcon from "../../../image/수정연필.png";

class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <img className="Profile-img" src={ profile } alt=""/>
                <div className="Profile-UserName">
                    <div className="Profile-UserName-left">사용자명</div>
                    <div className="Profile-UserName-right">UserId</div>
                </div>
                <div className="Profile-Fix">
                    <button type="button" className="Profile-Fix-btn">
                        <img className="Profile-Fix-btn-icon" src={fixIcon}/> 프로필 수정
                    </button>
                </div>
            </div>
        );
    }
}

export default Profile;