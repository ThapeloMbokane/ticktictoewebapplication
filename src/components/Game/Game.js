import React, {useState} from 'react';
import './Game.css';
import { Board } from '../Board/Board';
import { ResultModel } from '../ResultModel/ResultModel';
import { calculateWinner } from '../utils/WinnerCalculator';


export const Game = () =>{
    
    const [cellValues,setCellValues] = useState(['','','','','','','','','']);
    const [xIsNext,setXIsNext] = useState(true);
    const [isGameOver,setIsGameOver] = useState(false);
    const [numberOfTurnsLeft, setNumberOfTurnsLeft] = useState(9);
    const [winner,setWinner] = useState();
    const [winningCombination,setWinningCombination] = useState([]);

    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';

    const restartGame = () => {
        setCellValues(['','','','','','','','','']);
        setXIsNext(true);
        setIsGameOver(false);
        setNumberOfTurnsLeft(9);
        setWinner(undefined);
        setWinningCombination([]);
    }

    const onCellClicked = (cellIndex) =>{
        if(isCellEmpty(cellIndex)){
            const newCellValues = [...cellValues];
            newCellValues[cellIndex] = xIsNext ? 'X' : 'O';

            const newNumberOfTurnsLeft = numberOfTurnsLeft - 1;

            const gameResults = calculateWinner(newCellValues,newNumberOfTurnsLeft,cellIndex);

            setCellValues(newCellValues);
            setXIsNext(!xIsNext);
            setIsGameOver(gameResults.hasResult);
            setNumberOfTurnsLeft(newNumberOfTurnsLeft);
            setWinner(gameResults.winner);
            setWinningCombination(gameResults.winningCombinatination);
        }
    };


    return (
        <>
      
            <div id="game">
                <h1>Tic Tac Toe</h1>
                <Board 
                    cellValues = {cellValues}
                    winningCombination = {winningCombination}
                    cellClicked = {onCellClicked}
                />
            </div>
            <ResultModel
                isGameOver = {isGameOver} 
                winner = {winner}
                StartNewGame = {restartGame}
            />
    </>
  );
}

