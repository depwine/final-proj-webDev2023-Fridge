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

        let shortAmount = ing.amount

          //count decimals
        const countDecimals = (value) => {
          if (Math.floor(value) === value) return 0;
          return value.toString().split(".")[1].length || 0;
          }

        //shorten amount if decimals is > 2
          if (countDecimals(shortAmount) > 2) {
             shortAmount = ing.amount.toFixed(2)
          }

        // else, return full ing.amount

        return (
          <span key={ing.id}>
            <span> {ing.name} ({shortAmount} {ing.unit}) </span>

          </span>
        );
      })}
    </Wrapper>
  );
};

export default UsedIngredients;

const Wrapper = styled.div`
  
`;
