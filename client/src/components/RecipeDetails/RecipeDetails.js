import { useLocation } from "react-router-dom"
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import Header from "./Header";
import RecipeInstructions from "./RecipeInstructions";
import Cuisines from "./Cuisines";
import RecipeDetailedIngredients from "./RecipeDetailedIngredients";

const RecipeDetails = () => {

    const { user } = useAuth0();

    const rawData = useLocation();
    const recipeInfo = rawData.state.data

    let random = Math.random()

    return (
        
        <Wrapper>

                <Div>
                    <Header recipeInfo = {recipeInfo}/>

                    <span>
                        <h3>Ready In : {recipeInfo.readyInMinutes} Minutes</h3>
                        <h3>Servings : {recipeInfo.servings}</h3>
                        <h3>Weight Watcher Score : {recipeInfo.weightWatcherSmartPoints}</h3>
                    </span>

                        {
                            // display step by step instructions : 
                        }
                    <RecipeInstructions recipeInfo = {recipeInfo} /> 
                </Div>

                <RightDiv>
                    <H1>  {recipeInfo.title}  </H1>

                    <Cuisines recipeInfo = {recipeInfo}/>

                    <Img src = {recipeInfo.image} />
                    <IngTitle>Ingredients: </IngTitle>

                    <RecipeDetailedIngredients recipeInfo = {recipeInfo}/>

                </RightDiv>

        </Wrapper>
    
    )

}

export default RecipeDetails

const H1 = styled.h1`
    color:black;
    font-size: 40px;
    margin: 10px 0 10px 0;
    font-weight: bold;
    text-align: center;
`;

const RightDiv = styled.div`

    margin: 0 0 0 20px;
    display: flex;
    flex-direction: column;
    width: 45%;
    align-items: center;
    overflow-y: scroll;

`;



const Wrapper = styled.div`
  position: fixed;
    top: 80px;
    display: flex;
     /* border: 1px solid blue; */
     justify-content: space-between;
    height: 100%;
    width: 91.35vw;
`;


const IngTitle = styled.div`
    margin: 10px 0 10px 0;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`;


const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin: 0 0 0 20px;
    width: 55%;
    height: 91%;
    overflow-y: scroll;
`;


const Img = styled.img`
    width: 400px;
    align-self: center;
`;