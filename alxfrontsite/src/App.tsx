import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.scss";
import BlogPage from "./pages/Blog/BlogPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>

          <hr />

          <Routes>
            <Route path="/" element={<BlogPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
