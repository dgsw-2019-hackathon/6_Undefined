import React, { Component } from 'react';
import './MoodCard.scss';
import profile from '../../../image/1.jpg';
import unLike from '../../../image/like.png';
import like from '../../../image/likeon.png';
import axios from 'axios';
import { SERVER } from 'config/config.json';
import { withRouter } from 'react-router-dom';

class MoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCheck: false,
      comment: '',
      likeCount: this.props.boardLike
    };
  }

  applyWriteComment = () => {
    const req = {
      board_id: this.props.boardId,
      comment: this.state.comment
    };

    axios
      .post(`${SERVER}/api/mood_board/board_comment`, req, {
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      })
      .then((res) => {
        console.log(res.data.message);
        this.setState({
          comment: ''
        });
      })
      .catch((err) => {
        console.log(err.response.message);
      });
  };

  applyWriteLike = () => {
    const req = {
      board_id: this.props.boardId,
      like: this.state.likeCheck
    };

    axios
      .post(`${SERVER}/api/mood_board/board_like`, req, {
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      })
      .then((res) => {
        console.log(res.data.like_count);
        this.setState({
          likeCount: res.data.like_count
        });
      })
      .catch((err) => {
        console.log(err.response.message);
      });
  };

  handleChangeLike = () => {
    this.setState({
      likeCheck: !this.state.likeCheck
    });
    this.applyWriteLike();
  };

  handleChangeComment = e => {
    this.setState({
      comment: e.target.value
    })
  }

  render() {
    return (
      <div className="MoodCard">
        <div className="MoodCard-header">
          <img src={ profile } alt="profile" />
          <div className="MoodCard-header-content">
            <div className="MoodCard-header-content-name">{ this.props.userName }</div>
            <div className="MoodCard-header-content-time">{ this.props.writeTime }</div>
          </div>
        </div>
        <div className="MoodCard-contents">
          { this.props.contents }
        </div>
        <div className="MoodCard-foot">
          <div className="MoodCard-foot-like">
            <img src={ this.state.likeCheck === false ? unLike : like } alt="like" onClick={this.handleChangeLike} />
            <span>{ this.state.likeCount }</span>
          </div>
          <div className={`MoodCard-foot-comment ${ this.props.commentCheck === true ? '' : 'hide' }`}>
            <img src={ profile } alt="profile" />
            <input type="text" placeholder="댓글을 입력하세요..." onChange={this.handleChangeComment} value={ this.state.comment } />
            <button onClick={this.applyWriteComment}>댓글</button>
          </div>
        </div>        
      </div>
    )
  }
}

export default withRouter(MoodCard);
