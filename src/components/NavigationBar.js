import React from 'react'
import HeadLogo from '../Design/Images/esports-gaming-logo-icon-clipart-15.png';
import {Link} from 'react-router-dom';
import './Styles/navigation.css';


function NavigationBar(){
  return (
    <div className='navigation'>
        <Link to= '/Home'>
        <div className='HeadTitle'>
            
                <h1 className='multi-color'>
                    <span className='Left'>Game</span>
                    <img src={HeadLogo} />
                    <span className='Right'>Hub</span>
                </h1>
            
        </div>
        </Link>
        <div className='navigation_links'>
            <Link to='/New'>New</Link>
            <Link>My Games</Link>
            <Link>Trending</Link>
            <Link>Random</Link>
        </div>
    </div>
  );
}

export default NavigationBar;

