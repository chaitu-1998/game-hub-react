import React from 'react';
import '../components/Styles/OddEven.css';
import { useState,useEffect } from 'react';

function OddorEven() {
  const OddEven = ['Even','Odd'];
  const [UserInputNumber,setUserInputNumber] = useState(1);
  const [computerNumber,setComputerNumber] = useState(1);
  const [userCount, setUserCount] = useState(0);
  const [computerCount, setComputerCount] = useState(0);
  const [result,setResult] = useState('Press Num to Play');
  
  useEffect(()=>{
      if(UserInputNumber !== undefined && computerNumber !== undefined)
      {
        if(UserInputNumber === (computerNumber%2))
        {
          setResult("You Won");
          setComputerCount(computerCount);
          setUserCount(userCount+1)
        }
        else
        {
          setResult("Computer Won");
          setComputerCount(computerCount+1);
          setUserCount(userCount)
        }
      }
      },[UserInputNumber,computerNumber])

    const Play =(num) =>{
      setUserInputNumber(num);
      const randomNumber = Math.floor(Math.random()*9);
      setComputerNumber(randomNumber);

    }

  return (
    <div>
      <div>
      <div className='Game-board'>
        <div className='UserInput'>
            <h1>Pick&Play</h1>
            <div className='UserContainer'>
                <div className='buttonstyle'>
                    {OddEven.map((num,key) =>{
                     return( <button className="OddEvenButtom" value={num[key]} key={key} onClick={()=>{Play(key)
                    console.log(key)}}>{num}</button>)
                    })}
                </div>
                <div className='UserInputDataOE'>
                    <h3>Your Pick</h3>
                    <div className='YourPickOE'>
                        <h3>{UserInputNumber}</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className='ComputerOutput'>
            <h1>Computer Choose</h1>
            <div className='ComputerPickOE'>
                    <h3 className='computerOutputh3'>{computerNumber}</h3>
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
      </div>
    </div>
  )
}

export default OddorEven;