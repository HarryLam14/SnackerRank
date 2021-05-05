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
import SearchResults from "./components/SearchResults";
import ScrollToTop from "./components/ScrollToTop";
import _ from "lodash";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        }
      },
      (error) => console.log(error)
    );
    setUsername("");
    setPassword("");
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

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar loggedIn={loggedIn} userLogout={userLogout} />
        <div className="pageBody">
          <Route exact path="/">
            <Article />
            <TagsList />
          </Route>

          <Route path="/tag/:tags">
            <SnacksByTag />
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
            <SnackDetail />
          </Route>

          <Route path="/add-snack">
            <AddSnack />
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
