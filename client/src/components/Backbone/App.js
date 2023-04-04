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
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>

        {
          // set margin and padding to zero across site
        }


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

const GlobalStyle = createGlobalStyle`

    body{
      margin: 0px; 
      padding: 0px;
      height: 100%;
      font-family: 'Inter', sans-serif; 
      background-color: #f7f7f7;
   }

`;

const Container = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  height: 98vh;
  width: 100vw;
`;

const Content = styled.div`
  /* background-color: blue; */
  height: 100%;
  display: flex;
  flex-direction: c;
`;

const NonSidebar = styled.div`
  margin-left: 165px;
`;





