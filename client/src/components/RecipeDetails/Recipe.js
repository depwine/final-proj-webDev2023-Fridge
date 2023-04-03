import UsedIngredients from "../FeedMe/UsedIngredients";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";

const Recipe = ({ recipes, usedIngredients}) => {

  console.log(recipes)
  console.log(usedIngredients)

 const nav = useNavigate()

        // on click of a recipe, go here and initialize this state: 
  const handleClick = (recipe) => {

    console.log(recipe)
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

