import './App.css';
import Navbar from './components/Navbar.js'
import Article from './components/Article.js'
import Footer from './components/Footer.js'
import SnackDetail from "./components/SnackDetail.js";
import TagsList from "./components/TagsList.js";
import Card from "./components/Card.js";
import CategoryDisplay from "./components/CategoryDisplay.js"

import { BrowserRouter as Router, Route, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'

// currently just testing in App.js,
// this code will be split into different components eventually
import { useState, useEffect } from "react";
import { accountsAPI } from "./api/accounts";
import { snacksAPI } from "./api/snacks";
import _ from "lodash";
import Header from "./layout/Header";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    if (!_.isEmpty(accountsAPI.tokenHeader())) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    snacksAPI.getSnacks().then(
      (snacks) => {
        setSnacks(snacks);
      },
      (error) => console.log(error)
    );
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    accountsAPI.login(username, password).then(
      (res) => {
        if (res.status === 200) {
          setLoggedIn(true);
        }
      },
      (error) => console.log(error)
    );
    setUsername("");
    setPassword("");
  };

  const userLogout = () => {
    accountsAPI.logout();
    setLoggedIn(false);
  };

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="pageBody">
      
      <Route exact path='/' >
        <Article />
        <TagsList />
      </Route>

      <Route path='/tag/:tags'>
        <CategoryDisplay />
      </Route>

      <Route exact path='/login' >
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            ></input>
            <br></br>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password">
              </input>
            <br></br>
            <input type="submit" value="Login"></input>
          </form>
          <br></br>
        </>
      </Route>

      <button onClick={userLogout}>Logout</button>
      <SnackDetail snack_id="1" />
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
