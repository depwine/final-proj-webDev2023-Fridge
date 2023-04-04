import UsedIngredients from "../FeedMe/UsedIngredients";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";

const SearchResultRecipe = ({ recipes, usedIngredients}) => {

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
                <Img src={recipe.image}/>
                
                <Text>
                    <h3>{recipe.title} </h3>
                    <div>Ingredients From Your Search: </div>
                    <UsedIngredients usedIngredients={usedIngredients[recipes.indexOf(recipe)]} />       
                </Text>

        </Div>
        );
    })}


    </>
    );
};

export default SearchResultRecipe;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 10px 0 0;
`;

const Div = styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;   
    width: 800px;
    height: 100px;
    padding: 5px;
    margin: 5px 0 5px 0;
    box-shadow: 0px 0px 5px lightgrey;

    &:hover { 
        cursor: pointer; 
        outline: 2px solid #912247;
        box-shadow: 4px 4px 4px lightgray;
    }
    
`;

const Img = styled.img`
    width: 150px;    
`;

