import { useLocation } from "react-router-dom"
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import AddToFavRecipe from "../FeedMe/AddToFavRecipe";
import RecipeEquipment from "./RecipeEquipment";
import RecipeIngredients from "./RecipeIngredients";

const RecipeDetails = () => {

    const { user } = useAuth0();

    const rawData = useLocation();
    const recipeInfo = rawData.state.data

    let random = Math.random()

    return (
        
        <Wrapper>

                <Div>
                    <Header>
                        <H1>Instructions:</H1>
                        { 
                        ! user 
                        ? <span>Log in to save this recipe!</span>
                        : ( <AddToFavRecipe recipeInfo ={recipeInfo} user={user}/> )
                        }  
                    </Header>


                    <h3>Ready In : {recipeInfo.readyInMinutes} Minutes</h3>
                    <h3>Servings : {recipeInfo.servings}</h3>
                    <h3>Weight Watcher Score : {recipeInfo.weightWatcherSmartPoints}</h3>

                        {
                            // display step by step instructions : 
                        }

                    <div>
                        {recipeInfo.analyzedInstructions[0].steps.map((inst) => {

                            return (
                                <RecipeStep key= {recipeInfo.analyzedInstructions[0].steps.indexOf(inst) +  random}>
                                    <Step>Step #{inst.number} </Step>

                                    { // if ingredients exist, show
                                        inst.ingredients.length > 0 
                                        ? <div><RecipeIngredients inst = {inst}/></div>
                                        : null
                                    }
                                    {   //if equipment exists, show
                                        inst.equipment.length > 0 
                                        ? <div><RecipeEquipment inst = {inst}/></div>
                                        : null
                                    }

                                    {/* <span>Length: {inst.length.number} {inst.length.unit}</span> */}
                                    <span>{inst.step}</span>

                                </RecipeStep>
                            )

                        })}
                    </div>

 
                </Div>

                <RightDiv>
                    <H1>  {recipeInfo.title}  </H1>

                    {
                     ! recipeInfo.cuisines 
                        ? null
                        : (
                            <Cuisines> 
                                {recipeInfo.cuisines.map((cuisine) => {
                                return (
                                    <span key = {cuisine + random}>
                                         {`${cuisine}`}
                                    </span>)
                            })} 
                            ({recipeInfo.dishTypes.map((dish) => {
                                return (
                                        <span key = {dish + random}>
                                             {`${dish}`}
                                        </span>

                                    )
                            })})
                            </Cuisines>)    
                    }

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
    
    )

}

export default RecipeDetails

const Header = styled.span`
    width: 95%;
    display: flex;
    justify-content: space-between;
`;

const Cuisines = styled.span`
    display: flex;
    flex-direction: row;
    column-gap: 5px;
    font-size: 19px;
    margin: 0 0 20px 0;
`;

const Step = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin: 0 0px 5px 0;
`;

const RecipeStep = styled.div`
    display:flex ;
    flex-direction: column;
    margin: 0 0 20px 0;
    padding: 20px;
    width: 850px;
    background-color: #fff2f6;
    border-radius: 15px;
    box-shadow: 2px 2px 5px lightpink;
    row-gap: 10px;

`;

const RightDiv = styled.div`

    margin: 0 0 0 20px;
    display: flex;
    flex-direction: column;
    width: 45%;
    align-items: center;
    overflow-y: scroll;

`;


const IngDiv = styled.div`
    width: 700px;
    display: flex;
    flex: row;
    flex-wrap: wrap;
    justify-content: space-between;

`;

const Wrapper = styled.div`
    display: flex;
     /* border: 1px solid blue; */
     justify-content: space-between;
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
    width: 300px;
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
    width: 55%;
    overflow-y: scroll;
`;


const Img = styled.img`
    width: 400px;
    align-self: center;

`;