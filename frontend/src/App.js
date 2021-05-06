import "./App.css";
import { useState, useEffect } from "react";
import { accountsAPI } from "./api/accounts";
import Navbar from "./components/Navbar.js";
import Article from "./components/Article.js";
import Footer from "./components/Footer.js";
import SnackDetail from "./components/SnackDetail.js";
import TagsList from "./components/TagsList.js";
import SnacksByTag from "./components/SnacksByTag.js";
import SignIn from "./components/SignIn";
import AddSnack from "./components/AddSnack";
import SignUp from "./components/SignUp.js";
import SearchResults from "./components/SearchResults";
import ScrollToTop from "./components/ScrollToTop";
import LogInRouter from "./components/LogInRouter";
import _ from "lodash";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./static/article.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!_.isEmpty(accountsAPI.tokenHeader())) {
      setLoggedIn(true);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    accountsAPI.login(username, password).then(
      (res) => {
        if (res.status === 200) {
          setLoggedIn(true);
        } else if (res.status === 400) {
          alert("Incorrect username or password");
        }
      },
      (error) => console.log(error)
    );
    setUsername("");
    setPassword("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const userLogout = () => {
    accountsAPI.logout().then(
      (res) => {
        if (res.status === 204) {
          setLoggedIn(false);
        }
      },
      (error) => console.log(error)
    );
  };

  const newUser = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Please complete all fields");
      return;
    }
    accountsAPI.register(username, email, password).then(
      (res) => {
        if (res.status === 200) {
          setLoggedIn(true);
        } else if (res.status === 400) {
          alert("Username already exists");
        }
      },
      (error) => console.log(error)
    );
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar loggedIn={loggedIn} userLogout={userLogout} />
        <div className="pageBody">
          <Route exact path="/">
            <Article />
            <h2 className="fade-in">Browse Snacks by Tag</h2>
            <TagsList />
          </Route>
          <Route path="/tag/:tags">
            <SnacksByTag />
          </Route>

          <Route path="/login/:id">
            <LogInRouter
              onSubmit={onSubmit}
              handleUsernameChange={handleUsernameChange}
              handlePasswordChange={handlePasswordChange}
              loggedIn={loggedIn}
            />
          </Route>

          <Route exact path="/login">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <SignIn
                onSubmit={onSubmit}
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
              />
            )}
          </Route>

          <Route path="/snack/:id">
            <SnackDetail loggedIn={loggedIn} />
          </Route>

          <Route path="/add-snack">
            <AddSnack />
          </Route>

          <Route exact path="/sign-up">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <SignUp
                onSubmit={newUser}
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
                handleEmailChange={handleEmailChange}
              />
            )}
          </Route>

          <Route path="/search=:search">
            <SearchResults />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
