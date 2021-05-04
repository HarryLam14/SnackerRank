import "./App.css";
import Navbar from "./components/Navbar.js";
import Article from "./components/Article.js";
import Footer from "./components/Footer.js";
import SnackDetail from "./components/SnackDetail.js";
import TagsList from "./components/TagsList.js";
import SnacksByTag from "./components/SnacksByTag.js";
import SignIn from "./components/SignIn";
import AddSnack from "./components/AddSnack";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="pageBody">
          <Route exact path="/">
            <Article />
            <TagsList />
          </Route>

          <Route path="/tag/:tags">
            <SnacksByTag />
          </Route>

          <Route exact path="/login">
            <SignIn />
          </Route>

          <Route path="/snack/:id">
            <SnackDetail />
          </Route>

          <Route path="/add-snack">
            <AddSnack />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
