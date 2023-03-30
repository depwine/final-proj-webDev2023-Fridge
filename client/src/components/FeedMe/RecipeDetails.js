import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../Backbone/UserContext";

const RecipeDetails = () => {

    const { setOneIngredient, setIngredientSearchQuery } = useContext(UserContext);

    const nav = useNavigate()

    const rawData = useLocation();
    const recipeInfo = rawData.state.data

    const handleHome = () => {

        setOneIngredient()
        setIngredientSearchQuery([])

        nav("/")
    }

    console.log(recipeInfo)

    return (
        <>
        <Wrapper>
        <Div>
            <h1>  {recipeInfo.title}  </h1>
            <Img src = {recipeInfo.image} />
            <IngTitle>Ingredients: </IngTitle>
            {
                recipeInfo.missedIngredients.map((ing) => {
                    return (
                        <Ing key = {ing.id}>
                            <Bold>{ing.original}</Bold>

                            <div>{ing.amount} {ing.unit} {ing.extendedName}</div>
                            <Aisle>Aisle: {ing.aisle}</Aisle>
                            <div></div>
                            <div></div>
                            <div></div>
                        </Ing>
                    )
                })
            }        
        </Div>

            </Wrapper>
        </>
    )

}

export default RecipeDetails

const Wrapper = styled.div`
  /* border: 1px solid blue; */
    height: 100%;
    width: 100%;
`;

const Aisle = styled.span`
    font-style: italic;
`;


const IngTitle = styled.div`
    margin: 0 0 10px 0;
    font-weight: bold;
    font-size: 20px;
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

const H1 = styled.div`
    color:black,  

`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button``;

const Img = styled.img`
    width: 650px;

`;
