
import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Home from './pages/Home';
import RockPaperScissor  from './pages/RockPaperScisoor';
import New from './pages/New';
import OddorEven from './pages/OddorEven';
import TicTacToe from './pages/TicTacToe';



function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path='/New' element={<New />}/>
          <Route path = '/Home/RockPaperScissor' element={<RockPaperScissor />}/>
          <Route path = '/Home/OddorEven' element={<OddorEven />}/>
          <Route path = '/Home/TicTacToe' element={<TicTacToe />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

