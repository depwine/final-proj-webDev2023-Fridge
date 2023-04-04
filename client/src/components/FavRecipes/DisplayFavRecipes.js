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

const ErrDiv = styled.div`
  margin: 0 0 0 20px;
  font-style: italic;
`;

const Name = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`

  height: 110px;
  border-radius: 15px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border: none;
  color: white;
  background-color: #912247;

  &:hover{
    cursor: pointer;
    background-color: #6e1533;
    outline: 2px solid #6e1533;

  }
`;

const Div = styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;   
    width: 700px;
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

