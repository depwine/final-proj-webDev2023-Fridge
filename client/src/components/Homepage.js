import Search from "./Search";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import styled from "styled-components";
import IngredientInfo from "./IngredientInfo";

function Homepage() {
  // oneIngredient, setOneIngredient
  const { oneIngredient, ingredientSearchQuery, setIngredientSearchQuery } =
    useContext(UserContext);

            // search for recipes once 3 or more items have proper values 
      // (name, unit, quantity)
  const handleSearch = () => {};


  return (
    <>
      <Search />

      {!oneIngredient ? (
        <Div>Pick an ingredient ... </Div>
      ) : (
        <Div>
          Selected Ingredient(s):
          {ingredientSearchQuery.map((ingredient) => {
            return (
                <IngredientInfo ingredient={ingredient}/>
            );
          })}
        </Div>
      )}

      {ingredientSearchQuery.length < 3 ? (
        <Div>
          Please select more ingredients (minimum of 3) Before Searching{" "}
        </Div>
      ) : (
        <Button onClick={handleSearch}>Search for Recipes</Button>
      )}
    </>
  );
}

export default Homepage;

const Div = styled.div`
  font-size: 40px;
  margin: 50px;
`;

const Button = styled.button``;
