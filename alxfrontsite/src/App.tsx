import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import BlogPage from "./pages/Blog/BlogPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<BlogPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
