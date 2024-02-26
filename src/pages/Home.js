import React from 'react';
import {GameList} from './gamelist';
import '../components/Styles/Home.css';
import {Link} from 'react-router-dom';
import './RockPaperScisoor';
import './OddorEven';
import './TicTacToe';

function Home() {
  return (
    <div className='game-List'>
      {GameList.map((games,key)=>
      {
        return (<Link to={games.LinkPath}><div className='games'>
            <img src= {games.image}/>
            <h1>{games.name}</h1>
            </div>
            </Link>);
      })}
    </div>
  );
}

export default Home;