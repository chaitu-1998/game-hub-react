import React ,{ useState, useEffect } from 'react';
import '../components/Styles/RockPaper.css';
import Rock from '../Design/Images/Rock.jpg';
import Paper from '../Design/Images/Paper.jpg';
import Scissor from '../Design/Images/Scissor.jpg';
function RockPaperScisoor() {
    const [userCount, setUserCount] = useState(0);
    const [computerCount, setComputerCount] = useState(0);
    const [userPick, setUserPick] = useState(null);
    const [computerPick, setComputerPick] = useState(null);
    const [result, setResult] = useState('Start To See');

    useEffect(() => {
        if (userPick !== null && computerPick !== null) {
            if (userPick === computerPick) {
                setResult('Draw');
                setComputerCount(computerCount);
                setUserCount(userCount);
            } else if (
                (userPick === Rock && computerPick === Scissor) ||
                (userPick === Scissor && computerPick === Paper) ||
                (userPick === Paper && computerPick === Rock)
            ) {
                setResult('You Won');
                setComputerCount(computerCount);
                setUserCount(userCount + 1);
            } else {
                setResult('Computer Won');
                setComputerCount(computerCount + 1);
                setUserCount(userCount);
            }
        }
    }, [userPick, computerPick]);

    const rock = () => {
        let randomNumber = Math.floor(Math.random() * 3);
        let computerGuess = [Rock, Scissor, Paper];
        setComputerPick(computerGuess[randomNumber]);
        setUserPick(Rock);
    };

    const paper = () => {
        let randomNumber = Math.floor(Math.random() * 3);
        let computerGuess = [Rock, Scissor, Paper];
        setComputerPick(computerGuess[randomNumber]);
        setUserPick(Paper);
    };

    const scissor = () => {
        let randomNumber = Math.floor(Math.random() * 3);
        let computerGuess = [Rock, Scissor, Paper];
        setComputerPick(computerGuess[randomNumber]);
        setUserPick(Scissor);
    };
  return (
    <div className='Game-board'>
        <div className='UserInput'>
            <h1>Pick&Play</h1>
            <div className='UserContainer'>
                <div className='buttonstyle'>
                    <button className='Rock'  onClick={rock}>Rock</button>   
                    <button className='Paper' onClick={paper}>Paper</button>
                    <button className='Scissor' onClick={scissor}>Scissor</button>
                </div>
                <div className='UserInputData'>
                    <h3>Your Pick</h3>
                    <div className='YourPick'>
                      <img src={userPick} />  
                    </div>
                </div>
            </div>
        </div>
        <div className='ComputerOutput'>
            <h1>Computer Choose</h1>
            <div className='ComputerPick'>
            <img src={computerPick} />
            </div>
        </div>
        <div className='ScoreBoard'>
            <div className='ScoreTitle'>
                <h1>Score Board</h1>
                <h3>{result}</h3>
            </div>
            <div className='YourScore'>
                <div className='TitleDisplay'><h2>Your Score:</h2></div>
                <div className='ScoreDisplay'>
                    <h2>{userCount}</h2>
                </div>
            </div>
            <div className='ComputerScore'>
            <div className='TitleDisplay'><h2>Computer Score:</h2></div>
                <div className='ScoreDisplay'>
                    <h2>{computerCount}</h2>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default RockPaperScisoor;