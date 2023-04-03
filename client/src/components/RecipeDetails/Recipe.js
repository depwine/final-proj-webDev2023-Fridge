import UsedIngredients from "../FeedMe/UsedIngredients";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";

const Recipe = ({ recipes, usedIngredients}) => {

 const nav = useNavigate()

        // on click of a recipe, go here and initialize this state: 
  const handleClick = (recipe) => {

    nav("/recipe-details", {state : {data: recipe}})

  }

  return (
    <>
          {
          // map through recipe, make a summary
        }

      {recipes.map((recipe) => {
        
        return (

          <Div key={recipe._id} onClick={() => {            handleClick(recipe)          }}>

                  <h3>{recipe.title} </h3>
                  <Img src={recipe.image}/>
                  <div></div>

          {
                          ! usedIngredients
                          ? null 
                          : 
                          (     
                            <>
                              <div>Used Ingredients + Quantities: </div>
                              <UsedIngredients usedIngredients={usedIngredients[recipes.indexOf(recipe)]} />       
                            </>   
                          )
          }        

                  
          </Div>
        );
      })}

      {
        // if you're coming here from Feed Me, also map through used ingredients
      }

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
    background-color: #fff0f5;   
     border-radius: 15px;
    width: 250px;
    height: 340px;
    padding: 5px;
    margin: 5px 0 5px 0;
    box-shadow: 2px 2px 2px lightgrey;

    &:hover { 
      cursor: pointer; 
      outline: 2px solid #912247;
      box-shadow: 4px 4px 4px lightgray;

    }
    
`;

const Img = styled.img`
    width: 250px;
`;

