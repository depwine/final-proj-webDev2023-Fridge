import IngredientInfo from "./IngredientInfo";
import { useContext } from "react";
import { UserContext } from "../Backbone/UserContext";
import styled from "styled-components";

const IngredientContainer = () => {
  const { ingredientSearchQuery } = useContext(UserContext);

  return (
    <>
      <Div>
        {
          ! ingredientSearchQuery.length
          ? (<NoSearch> Search for your first ingredient ... </NoSearch>) 
          : (
            <>
              <SearchText>Selected Ingredient(s): (Search to add more!)</SearchText>

              {ingredientSearchQuery.map((ingredient) => {
                return (
                <IngredientInfo     key={ingredient.name}           map={ingredient._id + 11110}                ingredient={ingredient}                />
                );
              })}
            </>
          )
        }

      </Div>
    </>
  );
};

export default IngredientContainer;

const Div = styled.div`
  padding: 20px;
`;

const NoSearch = styled.div`
  font-size: 20px;
  margin: 20px;
`;

const SearchText = styled.span`
color: #6e1533
`;
