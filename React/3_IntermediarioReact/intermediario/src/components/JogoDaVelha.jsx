import React, {component} from 'react'
import {useState} from 'react'
import 

//function to build a square

function Square ({value, onSquareClick}){

    return (
        <div>
            <button className="square" onClick={onSquareClick}> {value} </button>
        </div>
    );
    
}

function Board (){

}


//componente pai
const JogoDaVelha = () => {

    const [history, setHistory] = useState([Array(9).fill(null)]); //Array dos valores do jogo. 
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares =  history[currentMove];



}

// Game (PAI)
//  ├── Board (Filho)
//  │    ├── Square (Filho de Board)
//  │    ├── Square
//  │    ├── Square
//  │    ├── ...
//  │
//  ├── Lista de movimentos (botões de histórico)


