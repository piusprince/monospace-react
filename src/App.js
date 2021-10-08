import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import developersImg from './images/developers.jpg'

function App() {
  return (
    <Router>
        <Navbar />
        <Header developersImg={developersImg}/>
    </Router>
  
  );
}

export default App;
