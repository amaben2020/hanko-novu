import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";
import Login from "./components/Login";
import NewPost from "./components/NewPost";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:slug" element={<Details />} />
        <Route path="/post/new" element={<NewPost />} />
      </Routes>
    </Router>
  );
};

export default App;
