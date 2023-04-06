import styled from "styled-components";

import SingleFavRecipe from "./SingleFavRecipe";

const DisplayFavRecipes = ({ favRecipes }) => {




  return (
    <>
      {!favRecipes ? (
        <span> Loading ... </span>
      ) : (

        favRecipes.map((recipe) => {

          return (

            <Wrapper key={recipe._id} >
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

