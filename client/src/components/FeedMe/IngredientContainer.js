import IngredientInfo from "./IngredientInfo";
import { useContext } from "react";
import { UserContext } from "../Backbone/UserContext";
import styled from "styled-components";

const IngredientContainer = () => {
  const { ingredientSearchQuery } = useContext(UserContext);

  return (
    <>
      <Div>
        Selected Ingredient(s): (Search to add more!)
        {ingredientSearchQuery.map((ingredient) => {
          return (
            <IngredientInfo
              map={ingredient._id + 11110}
              ingredient={ingredient}
            />
          );
        })}
      </Div>
    </>
  );
};

export default IngredientContainer;

const Div = styled.div``;
