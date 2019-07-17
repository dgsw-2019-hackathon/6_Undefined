import React, { Component } from 'react';
import Profile from './Profile/Profile';
import Account from './Account/Account';
import Board from './Board/Board';
import './MyInfo.scss';
import profileIcon from "../../image/profileIcon.png";
import accountIcon from "../../image/myAccount.png";
import boardIcon from "../../image/게시물작성.png";

export default class MyInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      condition: 1
    }
  }

  handleSwitch = (i) => {
    this.setState({
      condition: i
    });
    console.log(i);
  }
  
  render() {
    console.log(this.state.condition);
    return (
      <div className="MyInfo">
        <div className="MyInfo-NavBar">
          <div className={`MyInfo-NavBar-Profile ${this.state.condition === 1 && 'select'}`} onClick={() => {this.handleSwitch(1)}}>
            <img src={profileIcon} alt="" className="MyInfo-NavBar-Profile-img"/>
            <div className="MyInfo-NavBar-Profile-value">프로필</div>
          </div>
          <div className={`MyInfo-NavBar-Account ${this.state.condition === 2 && 'select'}`} onClick={() => {this.handleSwitch(2)}}>
            <img src={accountIcon} alt="" className="MyInfo-NavBar-Account-img"/>
            <div className="MyInfo-NavBar-Account-value">내 계정</div>
          </div>
          <div className={`MyInfo-NavBar-MyBoard ${this.state.condition === 3 && 'select'}`} onClick={() => {this.handleSwitch(3)}}>
            <img src={boardIcon} alt="" className="MyInfo-NavBar-MyBoard-img"/>
            <div className="MyInfo-NavBar-MyBoard-value">내 게시물</div>
          </div>
        </div>
        <div className="MyInfo-Main">
          <div className="MyInfo-Main-Content">
          {
            this.state.condition === 1 ? <Profile /> : this.state.condition === 2 ? <Account /> : <Board />
          }
          </div>
        </div>
      </div>
    )
  }
}
