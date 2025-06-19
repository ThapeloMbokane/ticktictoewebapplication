import React from "react";

import './ResultModel.css';
import classNames from "classnames";

export const ResultModel = (props) =>{
    
    const ResultModelClasses = classNames({
        'model-open' : props.isGameOver
    });

    const message = props.winner ? `Winner Is ${props.winner}. ` : 'The Game Is A Tie';

    return (

        <div id="modal-overlay" className={ResultModelClasses}>

            <div id="game-result-modal">

                <div id="result-container">

                    <div id="winner-container">

                        <span>{message}</span>
                    </div>
                </div>

                <div id="new-game-container">
                    <button id="new-game-button">Start New Game</button>
                </div>
            </div>
        </div>
    );
}