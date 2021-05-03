import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Article from './components/Article.js'
import Footer from './components/Footer.js'

import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="pageBody">
        <Article />
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
