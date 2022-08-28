import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import BlogPage from "./pages/Blog/BlogPage";
import Article from "./pages/Article/Article";

function App() {
  return (
    <div className="App xl:container mx-auto">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<BlogPage />} />
            <Route path="article">
              <Route path=":id" element={<Article />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
