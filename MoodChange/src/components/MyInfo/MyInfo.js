import React, { Component } from 'react'
import './MyInfo.scss';

export default class MyInfo extends Component {
  render() {
    return (
      <div className="MyInfo">
        <div children="MyInfo-NavBar">
          <div className="MyInfo-NavBar-Profile">
            프로필
            <img className="MyInfo-NavBar-Profile-img" src="../../image/profileIcon.png"/>
          </div>
          <div className="MyInfo-NavBar-Account">
            내 계정
          </div>
          <div className="MyInfo-NavBar-MyBoard">
            내 게시물
          </div>
        </div>
        <div className="MyInfo-Main">
          메인
        </div>
      </div>
    )
  }
}
