import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedMe from "../FeedMe/FeedMe";
import Homepage from "../Homepage/Homepage";
import RecipeDetails from "../FeedMe/RecipeDetails";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <BrowserRouter>

      <Header />
      <Container>
      <Sidebar />
      <Content >
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/FeedMe" element={<FeedMe />} />
            <Route path="/recipe-details" element={<RecipeDetails />} />
          </Routes>
      </ Content>

      </Container>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`

  display: flex;
  flex-direction: row

`;

const Content = styled.div`

`;



