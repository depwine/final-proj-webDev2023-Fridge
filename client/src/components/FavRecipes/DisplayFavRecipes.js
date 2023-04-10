import styled from "styled-components";
import {BiLoader} from "react-icons/bi"


import SingleFavRecipe from "./SingleFavRecipe";

const DisplayFavRecipes = ({ favRecipes }) => {




  return (
    <>
      {!favRecipes ? (
        <LoadingFeedDiv> <BiLoader/> </LoadingFeedDiv>
      ) : (

        favRecipes.map((recipe) => {

          return (

            <Wrapper key={recipe.id} >
                <SingleFavRecipe recipe = {recipe}/>
            </Wrapper>

          );
        })

      )}
    </>
  );
};

export default DisplayFavRecipes;



const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

`;

const LoadingFeedDiv = styled.div`
margin: 100px 0 0 0;
display: flex;
justify-content: center;
align-items: center;
width: 800px;
font-size: 50px;
font-weight: bold;
animation: rotation 2s infinite linear;
color: #3E3C61;

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`;

