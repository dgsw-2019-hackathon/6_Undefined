import React, { Component } from 'react';
import './MoodCard.scss';
import profile from '../../../image/1.jpg';
import unLike from '../../../image/like.png';
import like from '../../../image/likeon.png';

export default class MoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCheck: true,
      commentCheck: true
    };
  }

  handleChangeLike = () => {
    this.setState({
      likeCheck: !this.state.likeCheck
    });
  };

  render() {
    return (
      <div className="MoodCard">
        <div className="MoodCard-header">
          <img src={ profile } alt="profile" />
          <div className="MoodCard-header-content">
            <div className="MoodCard-header-content-name">이상한 사람</div>
            <div className="MoodCard-header-content-time">20시간 전</div>
          </div>
        </div>
        <div className="MoodCard-contents">
          그리워서 한 잔
          생각나서 한 잔
          내 눈물 섞어 한 잔
          또 한 잔 마시다

          우리 옛 추억에 취해
          독한 네 사랑에 취해
          너의 전화 번홀 누르게 돼
          아마 받지 않겠지만
          미안해
        </div>
        <div className="MoodCard-foot">
          <div className="MoodCard-foot-like">
            <img src={ this.state.likeCheck === true ? unLike : like } alt="like" onClick={this.handleChangeLike} />
            <span>12</span>
          </div>
          <div className="MoodCard-foot-comment">
            <img src={ profile } alt="profile" />
            <input className={ this.state.commentCheck === true ? "" : "hide" } type="text" placeholder="댓글을 입력하세요..." />
          </div>
        </div>        
      </div>
    )
  }
}
