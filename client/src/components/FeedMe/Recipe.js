import UsedIngredients from "./UsedIngredients";
import styled from "styled-components";

const Recipe = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe) => {
        return (
          <Div key={recipe.id}>
            <span>Recipe :  {recipe.title} </span>
            <Img src={recipe.image}/>
            <div></div>
            <div></div>
            <span>Recipe :  {recipe.title} </span>


            <div>Used Ingredients + Quantities: </div>
            <UsedIngredients usedIngredients={recipe.usedIngredients} />
          </Div>
        );
      })}
    </>
  );
};

export default Recipe;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 250px;
    padding: 5px;
    margin: 5px 0 5px 0;
    box-shadow: 2px 2px 2px grey;
`;

const Img = styled.img`
    width: 200px;
`;

