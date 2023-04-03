import UsedIngredients from "../FeedMe/UsedIngredients";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";

const Recipe = ({ recipes }) => {

 const nav = useNavigate()

        // on click of a recipe, go here and initialize this state: 
  const handleClick = (recipe) => {
    nav("/recipe-details", {state : {data: recipe.recipeId}})

  }

  return (
    <>

      {recipes.map((recipe) => {
        
        return (

          <Div key={recipe._id} onClick={() => {            handleClick(recipe)          }}>

                  <h3>{recipe.title} </h3>
                  <Img src={recipe.image}/>
                  <div></div>

                  {
                    recipe.usedIngredients && 

                    (
                      <>
                        <div>Used Ingredients + Quantities: </div>
                        <UsedIngredients usedIngredients={recipe.usedIngredients} />
                      </>
                    )                
                  }
          </Div>
        );
      })}

    </>
  );
};

export default Recipe;

const Div = styled.div`

    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: 2px solid grey;
    background-color: #f8f8f8;
    border-radius: 15px;
    width: 250px;
    height: 360px;
    padding: 5px;
    margin: 5px 0 5px 0;
    box-shadow: 2px 2px 2px lightgrey;

    &:hover { 
      cursor: pointer; 
      outline: 5px solid red;
    }
    
`;

const Img = styled.img`
    width: 200px;
`;

