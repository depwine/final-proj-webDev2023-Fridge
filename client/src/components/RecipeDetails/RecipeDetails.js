import { useLocation } from "react-router-dom"
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import Header from "./Header";
import RecipeInstructions from "./RecipeInstructions";
import Cuisines from "./Cuisines";
import RecipeDetailedIngredients from "./RecipeDetailedIngredients";
import AddToFavRecipe from "../FeedMe/AddToFavRecipe";
import { useEffect } from "react";

import { useContext } from "react";
import { UserContext } from "../Backbone/UserContext";

const RecipeDetails = () => {

    const {  setIngredientSearchQuery, setOneIngredient, setRecipes} = useContext(UserContext);


    //upon getting here, clear all searches

    const handeClearRecipes = () => {
        setRecipes(null)
        setIngredientSearchQuery([])
        setOneIngredient(null)
      }  

    useEffect(() => {
        handeClearRecipes()


    }, [])

    const { user } = useAuth0();

    const rawData = useLocation();
    const recipeInfo = rawData.state.data


    return (
        
        <Wrapper>

                <Div>
                    <Header recipeInfo = {recipeInfo}/>

                    <span>
                        <H3>Ready In : {recipeInfo.readyInMinutes} Minutes</H3>
                        <H3>Servings : {recipeInfo.servings}</H3>
                        
                        <WeightAdd>
                            <Weight>Weight Watcher Score : {recipeInfo.weightWatcherSmartPoints}</Weight>                         
                            <AddToFavRecipe recipeInfo ={recipeInfo} user={user}/> 
                        </WeightAdd>


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

                    <h3>Ingredients: </h3>
                    <RecipeDetailedIngredients recipeInfo = {recipeInfo}/>
                </RightDiv>

        </Wrapper>
    
    )

}

export default RecipeDetails

const WeightAdd = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0 0 20px 0;
    width: 890px;
`;

const H1 = styled.h1`
    color: #3E3C61;
    font-size: 30px;
    margin: 10px 0 10px 0;
    font-weight: bold;
    text-align: center;
`;

const H3 = styled.div`
    display: flex;
    margin: 0 0 10px 0;
    color: #6e1533;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;

const Weight = styled.div`
    display: flex;
    color: #6e1533;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;


const RightDiv = styled.div`
    margin: 0 0 0 20px;
    display: flex;
    flex-direction: column;
    width: 55%;
    align-items: center;
`;



const Wrapper = styled.div`
    position: fixed;
    top: 80px;
    display: flex;
     /* border: 1px solid blue; */
     justify-content: space-between;
     width: 100%;
    height: 91%;
    overflow-y: scroll;

    background-image: linear-gradient(
  180deg,
  hsl(0deg 0% 100%) 0%,
  hsl(0deg 0% 98%) 17%,
  hsl(0deg 0% 96%) 33%,
  hsl(0deg 0% 94%) 50%,
  hsl(0deg 0% 92%) 67%,
  hsl(0deg 0% 90%) 83%,
  hsl(0deg 0% 89%) 100%
);
`;




const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin: 0 0 0 20px;
    width: 55%;
    height: 91%;
`;


const Img = styled.img`
    width: 400px;
    align-self: center;
    box-shadow: 0px 0px 15px lightgray;

    transition: 0.1s ease-in-out;

    &:hover{
        width: 405px;
    }
`;