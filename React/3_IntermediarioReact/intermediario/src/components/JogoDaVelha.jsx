import React, {component} from 'react'
import {useState} from 'react'

//function to build a square

function Square ({value, onSquareClick}){

    return (
        <div>
            <button className="square" onClick={onSquareClick}> {value} </button>
        </div>
    );
}

function Board ({xIsNext, currentSquares, handlePlay}){



}


//componente pai
const JogoDaVelha = () => {

    const [history, setHistory] = useState([Array(9).fill(null)]); //Array dos valores do jogo. 
    const [currentMove, setCurrentMove] = useState(0);
    //x sendo o primeiro
    const xIsNext = currentMove % 2 === 0;
    const currentSquares =  history[currentMove];

    function handlePlay (nextSquares) {
        const nextHistory = [...history.slice(0, currentMove), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);        
    }

    function jumpTo (nextMove){
        setCurrentMove(nextMove)
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0){
            description = 'Go to move ->' + move;
        } else {
            description = 'Go to game start';
        }

        return (
            <li>
                <button onClick={() => jumpTo(move)}>{description} </button>
            </li>
        );
        
    });

    return (
        <div className='JogoDaVelha'>
            
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}></Board>
            </div>

            <div className='game-info'>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}




// Game (PAI)
//  ├── Board (Filho)
//  │    ├── Square (Filho de Board)
//  │    ├── Square
//  │    ├── Square
//  │    ├── ...
//  │
//  ├── Lista de movimentos (botões de histórico)



