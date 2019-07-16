import React, { Component } from 'react';
import './Home.scss';
import Logo from '../../image/logo.png';
import News from '../../image/White.png';
import profile from '../../image/1.jpg';
import writeImg from '../../image/내 게시물white.png';
import MoodCard from './MoodCard';
import {withRouter} from 'react-router-dom';

class Home extends Component {
  handleChangeWriteUrl = () => {
    this.props.history.push('/WriteMoodBoard');
  }

  handleChangeMyInfoUrl = () => {
    this.props.history.push('/MyInfo');
  }

  render() {
    return (
      <div className="Home">
        <div className="Home-Navi">
          <ul>
            <li className="logo"><img src={Logo} alt="Logo" /></li>
            <li className="news"><img src={News} alt="News" className="newsImg" /><span>뉴스피드</span></li>
            <li className="profile" onClick={this.handleChangeMyInfoUrl}><img src={profile} alt="profile" />안채원</li>
          </ul>
        </div>
        <MoodCard />
        <button className="WriteBtn" onClick={this.handleChangeWriteUrl}><img src={writeImg} alt="writeImg" />게시물 작성</button>
      </div>
    )
  }
}

export default withRouter(Home);
