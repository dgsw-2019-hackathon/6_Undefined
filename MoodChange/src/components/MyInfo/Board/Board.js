import React, { Component } from 'react';
import './Board.scss';
import out from "../../../image/out.png";
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import MoodCard from '../../Home/MoodCard';

@inject('store')
@observer
class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userMoodBoardList: []
        };
    }
    async componentDidMount() {
        const { store } = this.props;
        await store.UserMoodBoardListStore.getUserMoodBoardList();
        
        this.setState({
            userMoodBoardList: store.UserMoodBoardListStore.UserMoodBoardList
        });
    }
    handleChangeHomeUrl = () => {
        this.props.history.push('/');
    }
    render() {
        const {userMoodBoardList} = this.state;
        console.log(userMoodBoardList)
        return (
            <div>
                <div className="card">
                    {
                        userMoodBoardList && userMoodBoardList.map((board, i) => {
                            return (
                                <MoodCard
                                userName={board.user_id}
                                writeTime={board.date_time}
                                contents={board.content}
                                commentCheck={false}
                                boardId={board.id}
                                boardLike={board.like}
                                />
                            );
                        })
                    }
                </div>
                <img src={ out } className="Out" onClick={ this.handleChangeHomeUrl} alt=""/>
            </div>
        );
    }
}

export default withRouter(Board);