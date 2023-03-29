import Dropdown from "./Dropdown";
import Units from "./Units";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import styled from "styled-components";

const IngredientInfo = ({ingredient}) => {

    const { oneIngredient, ingredientSearchQuery, setIngredientSearchQuery } =
    useContext(UserContext);

    const [unit, setUnit] = useState();
    const [quantity, setQuantity] = useState()


  const handleRemoveOneItem = (ingredient) => {

    // if there's only 1 search item, do this:
    if (ingredientSearchQuery.length < 2) {
      let emptyArr = [];
      setIngredientSearchQuery(emptyArr);
    }

    // 2 or more search items
    else {
      let tempArr = ingredientSearchQuery
      tempArr.splice((tempArr.indexOf(ingredient)), 1)
      setIngredientSearchQuery(tempArr)

        // ******** this forces a re-render (because the above tempArr isnt seen as a valid state change): ****************
      setIngredientSearchQuery([...ingredientSearchQuery])
    }

  };

    
  const handleChange = (key, value) => {
    setQuantity({
      ...quantity,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    //prev def
    e.preventDefault();

  };

  return (
    <>
      <Div key={ingredient._id + ingredient.name}>
        <span>Item : {ingredient.name} </span>

        <form onSubmit={handleSubmit}>
          <label htmlFor="Quantity">Quantity : </label>
          <input
            type="text"
            id="quantity"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
          <Button type="submit" value="Submit" />
        </form>

        <span>
          Select Unit Type : <Dropdown ingredient={ingredient} />{" "}
        </span>
        <Units ingredient={ingredient} />
        <Button onClick={() => {handleRemoveOneItem(ingredient)}}>  {" "} X {" "} </Button>
        <div> {ingredient.amount} {ingredient.name} ({}, {ingredient.unit_type})</div>
      </Div>
    </>
  );

};

export default IngredientInfo;

const Div = styled.div`
  font-size: 30px;
  margin: 50px;
`;

const Button = styled.button``;

