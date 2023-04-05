import UsedIngredients from "../FeedMe/UsedIngredients";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { FaClock } from "react-icons/fa";


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

            // trim title string
    var maxLength = 50;

    let result = recipe.title

    if (recipe.title.length > maxLength) {
        result = recipe.title.substring(0, maxLength) + '...';
    }

        
        return (

        <Div key={recipe._id} onClick={() => {            handleClick(recipe)          }}>
                <Img src={recipe.image}/>
                
            <RightDiv>

            <Time>
                <TimeText>
                    {recipe.readyInMinutes}
                </TimeText> 
                <FaClock style ={{fontSize: "20px"}}/> 
            </Time>
                <Text>
                    <h3>{result} </h3>
                    <div>Ingredients From Your Search: </div>
                    <UsedIngredients usedIngredients={usedIngredients[recipes.indexOf(recipe)]} />       
                </Text>
            </RightDiv>
        </Div>
        );
    })}


    </>
    );
};

export default SearchResultRecipe;

const TimeText = styled.span`
    margin: 0 0 2px 0;
`;

const RightDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 630px;
    height: 100px;

`;

const Time = styled.div`
    display: flex;
    align-items: flex-end;
    column-gap: 5px;
    margin: 0 0 10px 0;

`;

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
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;   
    width: 800px;
    height: 100px;
    margin: 5px 0 5px 0;
    box-shadow: 0px 0px 5px lightgrey;

    &:hover { 
        cursor: pointer; 
        outline: 2px solid #912247;
        box-shadow: 4px 4px 4px lightgray;
    }
    
`;

const Img = styled.img`
    height: 100px;
    width: auto;    
`;

