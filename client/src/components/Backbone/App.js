import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedMe from "../FeedMe/FeedMe";
import Homepage from "../Homepage/Homepage";
import RecipeDetails from "../FeedMe/RecipeDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/FeedMe" element={<FeedMe />} />
        <Route path="/recipe-details" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

