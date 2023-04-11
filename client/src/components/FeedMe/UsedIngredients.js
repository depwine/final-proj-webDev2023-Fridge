import { useContext } from "react";
import { UserContext } from "../Backbone/UserContext";
import styled from "styled-components";

const UsedIngredients = ({ usedIngredients }) => {

  const { ingredientSearchQuery } = useContext(UserContext);

  // console.log(ingredientSearchQuery)

  // console.log(usedIngredients.usedIngredients)
  
  return (
    <Wrapper>
      {usedIngredients.usedIngredients.map((ing) => {
        return (
          <span key={ing.id}>
            <span> {ing.name} ({ing.amount} {ing.unit}) </span>

          </span>
        );
      })}
    </Wrapper>
  );
};

export default UsedIngredients;

const Wrapper = styled.div`
  
`;
