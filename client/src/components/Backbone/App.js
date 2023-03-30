import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedMe from "../FeedMe/FeedMe";
import Homepage from "../Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/FeedMe" element={<FeedMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

