import React, { Component } from 'react';
import './Profile.scss';
import profile from "../../../image/1.jpg";
import out from "../../../image/out.png";

class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <img className="Profile-img" src={ profile } alt=""/>
                <div className="Profile-UserName">
                    <div className="Profile-UserName-left">사용자명</div>
                    <div className="Profile-UserName-right">UserId</div>
                </div>'
                <img src={ out } className="Out" alt=""/>
            </div>
        );
    }
}

export default Profile;