import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { FaClock } from "react-icons/fa";


const Recipe = ({ recipes }) => {

 const nav = useNavigate()

        // on click of a recipe, go here and initialize this state: 
  const handleClick = (recipe) => {

    nav("/recipe-details", {state : {data: recipe}})

  }

  console.log(recipes)

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
                    <RecTile>{recipe.title} </RecTile>
                    <Time>{recipe.readyInMinutes}  <FaClock style ={{fontSize: "20px"}}/> </Time>
            </Text>
          </Div>
        );
      })}

    </>
  );
};

export default Recipe;

const RecTile = styled.span`
  font-size: 15px;
  margin: 0 0 5px 0;
  font-weight: bold;
  color: #6e1533;
`;

const Time = styled.span`
  display: flex;
  align-items: flex-end;
  column-gap: 5px;
  font-size: 15px;
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
    justify-content: space-between;
    align-items: center;
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
    
`;

