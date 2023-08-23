import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Favorite from './components/Favorite';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
    <Router>
    <NavBar/>
      <Routes>
      <Route path='/' index element={<Home/>}/>
        <Route path="/favorite" element={<Favorite/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
