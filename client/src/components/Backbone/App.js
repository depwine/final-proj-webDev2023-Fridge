import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedMe from "../FeedMe/FeedMe";
import Homepage from "../Homepage/Homepage";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Profile from "../Profile/Profile";
import FavRecipes from "../FavRecipes/FavRecipes";

function App() {
  return (
    <BrowserRouter>

        {
          // set margin and padding to zero across site
        }

      <style jsx="true" global="true"> {
      ` 
        body {
          margin: 0px; 
          padding: 0px;
          height: 100%;
        } 
      `
      } </style>

      <Container>
        {/* <Header /> */}

        <Content >
          <Sidebar />
          <NonSidebar>
              <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/FeedMe" element={<FeedMe />} />
                  <Route path="/recipe-details" element={<RecipeDetails />} />
                  <Route path="/favrecipes" element={<FavRecipes />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
          </NonSidebar>
        </ Content>
        </Container>
    </BrowserRouter>
  );
}

export default App;


const Container = styled.div`
  /* background-color: red; */
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 98vh;
  width: 100vw;
`;

const Content = styled.div`
  /* background-color: blue; */
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const NonSidebar = styled.div`
  margin-left: 165px;
`;





