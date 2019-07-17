import React, { Component } from 'react';
import './Board.scss';
import out from "../../../image/out.png";

class Board extends Component {

    handleChangeHomeUrl = () => {

        this.props.history.push('/');
    }


    render() {
        return (
            <div>
                
                <img src={ out } className="Out" onClick={ this.handleChangeHomeUrl} alt=""/>
            </div>
        );
    }
}

export default Board;