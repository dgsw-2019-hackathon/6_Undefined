import React, { Component } from 'react';
import './Home.scss';
import Logo from '../../image/logo.png';
import News from '../../image/White.png';
import profile from '../../image/1.jpg';
import writeImg from '../../image/내 게시물white.png';
import MoodCard from './MoodCard';
import {withRouter} from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moodBoardList: []
    };
  }

  async componentDidMount() {
    const { store } = this.props;
    await store.MoodBoardListStore.getMoodBoardList();
    
    this.setState({
      moodBoardList: store.MoodBoardListStore.MoodBoardList
    });

    console.log(this.state.moodBoardList);
  }

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
        <div className="cardList">
          {
            this.state.moodBoardList.map((board, i) => {
              return (
                <MoodCard
                  userName={board.user_id}
                  writeTime={board.date_time}
                  contents={board.content}
                  commentCheck={board.comment_check}
                  boardId={board.id}
                  boardLike={board.like}
                />
              );
            })
          }
        </div>
        <button className="WriteBtn" onClick={this.handleChangeWriteUrl}><img src={writeImg} alt="writeImg" />게시물 작성</button>
      </div>
    )
  }
}

export default withRouter(Home);
