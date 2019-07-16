import React, { Component } from 'react';
import './Home.scss';
import Logo from '../../image/logo.png';
import News from '../../image/White.png';
import profile from '../../image/1.jpg';
import writeImg from '../../image/내 게시물white.png';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-Navi">
          <ul>
            <li className="logo"><img src={Logo} alt="Logo" /></li>
            <li className="news"><img src={News} alt="News" className="newsImg" />뉴스피드</li>
            <li className="profile"><img src={profile} alt="profile" />안채원</li>
          </ul>

          <button><img src={writeImg} alt="writeImg" />게시물 작성</button>
        </div>
      </div>
    )
  }
}
