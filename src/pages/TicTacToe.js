import React, { useState } from 'react'

function TicTacToe() {
  const [userInput,setUserInput] = useState();
  return (
    <div className='TicTacToe'>
      <div className='Game'>
        <h1>Play TIC-TAC-TOE</h1>

      </div>
      <div className='Result'>

      </div>
    </div>
  )
}

export default TicTacToe