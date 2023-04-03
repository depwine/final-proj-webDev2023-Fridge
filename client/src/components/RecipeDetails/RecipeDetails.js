import { useLocation } from "react-router-dom"
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import AddToFavRecipe from "../FeedMe/AddToFavRecipe";
import RecipeEquipment from "./RecipeEquipment";
import RecipeIngredients from "./RecipeIngredients";

const RecipeDetails = () => {

    const { user } = useAuth0();

    const rawData = useLocation();
    console.log(rawData.state)
    const recipeInfo = rawData.state.data

    console.log(recipeInfo)
    console.log(recipeInfo.cuisines)

    let random = Math.random()

    return (
        <>
        <Wrapper>
                <Div>
                    
                    <H1>Summary:</H1>

                    {
                     ! recipeInfo.cuisines 
                        ? null
                        : (
                            <h2> 
                                {recipeInfo.cuisines.map((cuisine) => {
                                return (`${cuisine} `)
                            })} 
                            ({recipeInfo.dishTypes.map((dish) => {
                                return (`${dish} `)
                            })})
                            </h2>)    
                    }


                    <h1>Instructions:</h1>
                    <h3>Ready In : {recipeInfo.readyInMinutes} Minutes</h3>
                    <h3>Servings : {recipeInfo.servings}</h3>
                    <h3>Weight Watcher Score : {recipeInfo.weightWatcherSmartPoints}</h3>

                        {
                            // display step by step instructions : 
                        }

                    <RecipeInst>{recipeInfo.analyzedInstructions[0].steps.map((inst) => {

                        return (
                            <div key= {random}>
                                <div>Step: {inst.number} Step</div>
                                {/* <div><RecipeIngredients inst = {inst}/></div>
                                <div><RecipeEquipment inst = {inst}/></div> */}
                                {/* <span>Length: {inst.length.number} {inst.length.unit}</span> */}
                                {/* <span>{inst.step}</span> */}

                            </div>
                        )

                    })}</RecipeInst>






                    { 
                    ! user 
                    ? <span>Log in to save this recipe!</span>
                    : ( <AddToFavRecipe recipeInfo ={recipeInfo} user={user}/> )
                    }   
                </Div>

                <RightDiv>
                    <H1>  {recipeInfo.title}  </H1>
                    <Img src = {recipeInfo.image} />
                    <IngTitle>Ingredients: </IngTitle>
                    {
                        ! recipeInfo.missedIngredients
                        ?                 
                        (   <IngDiv>      
                            {
                                recipeInfo.extendedIngredients.map((ing) => {
                                    return (
                                        <Ing key = {ing.id}>
                                            <Bold>{ing.original}</Bold>
                                            <div>{parseFloat(ing.amount.toFixed(2))} {ing.unit} {ing.nameClean}</div>
                                            <Aisle>Aisle: {ing.aisle}</Aisle>
                                        </Ing>
                                    )
                                })
                            }               

                            </IngDiv>      
                        )
                        :             
                        (           
                            
                                recipeInfo.missedIngredients.map((ing) => {
                                    return (
                                        <Ing key = {ing.id}>
                                            <Bold>{ing.original}</Bold>    
                                            <div>{ing.amount} {ing.unit} {ing.extendedName}</div>
                                            <Aisle>Aisle: {ing.aisle}</Aisle>
                                        </Ing>
                                    )
                                })
                            
                        )
                    }
     
                </RightDiv>

        </Wrapper>
        </>
    )

}

export default RecipeDetails

const RightDiv = styled.div`

    margin: 0 0 0 20px;
    display: flex;
    flex-direction: column;
    width: 55%;

`;

const RecipeInst = styled.div`


`;

const IngDiv = styled.div`
    display: flex;
    flex: row;
    flex-wrap: wrap;
    justify-content: space-between;

`;

const Wrapper = styled.div`
    display: flex;
     /* border: 1px solid blue; */
    height: 100%;
    width: 91.35vw;
`;

const Aisle = styled.span`
    font-style: italic;
`;

const IngTitle = styled.div`
    margin: 10px 0 10px 0;
    font-weight: bold;
    font-size: 20px;
    text-align: center;

`;

const Bold = styled.span`
    font-weight: bold;
    text-align: center;
    padding: 0 0 5px 0;
`;

const Ing = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 600px;
    margin: 0 0 5px 0;
    padding: 2px;
    border: 1px solid grey;
`;

const H1 = styled.h1`
    color:black;
    font-size: 40px;
    margin: 10px 0 10px 0;
    font-weight: bold;
    text-align: center;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin: 0 0 0 20px;
    width: 35%;
`;

const Button = styled.button`
`;

const Img = styled.img`
    width: 600px;
    align-self: center;

`;