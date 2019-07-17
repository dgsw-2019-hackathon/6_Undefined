import React, { Component } from 'react';
import './WriteMoodBoard.scss';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import { SERVER } from 'config/config.json';
import Swal from 'sweetalert2';

class WriteMoodBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentCheck: false,
      content: ''
    };
  }

  applyWriteBoard = () => {
    console.log(localStorage.getItem('token'));
    const req = {
      content: this.state.content,
      comment_check: this.state.commentCheck
    };

    axios
      .post(`${SERVER}/api/mood_board/board_create`, req, {
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      })
      .then((res) => {
        Swal.fire(res.data.message, '즐거운 하루 되세요!', 'success');
        this.props.history.push('/');
      })
      .catch((err) => {
        Swal.fire(err.response.message, 'error');
      });
  };

  handleChangeCancleUrl = () => {
    this.props.history.push('/');
  }

  handleChangeCommentCheck = () => {
    this.setState({
      commentCheck : !this.state.commentCheck
    });
  }

  handleChangeText = (e) => {
    console.log(e.target.value);
    this.setState({
      content: e.target.value
    });
  }

  render() {
    return (
      <div className="WriteMood">
        <div className="WriteMood-card">
          <div className="WriteMood-card-title">게시글 작성</div>
          <div className="WriteMood-card-content">
            <textarea placeholder="게시글 내용을 입력해 주세요." onChange={ this.handleChangeText } />
            <div className="WriteInput">
              <div className="WriteButton">
                <button onClick={this.handleChangeCancleUrl}>취소</button>
                <button onClick={this.applyWriteBoard}>글쓰기</button>
              </div>
              <div className="checkBox">
                <span>댓글 허용</span>
                <input type="checkbox" name="comment_check" onClick={this.handleChangeCommentCheck} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(WriteMoodBoard);
