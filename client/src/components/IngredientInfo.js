import Dropdown from "./Dropdown";
import Units from "./Units";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import styled from "styled-components";

const IngredientInfo = ({ingredient}) => {

    const { oneIngredient, ingredientSearchQuery, setIngredientSearchQuery } =
    useContext(UserContext);

    const [quantity, setQuantity] = useState(0)
    const [showAmount, setShowAmount] = useState (0)

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
        //handle input change in num form
    setQuantity({
      ...quantity,
      [key]: value,
    }); 
  };


    // for testing search query
  useEffect(() => {
    console.log(ingredientSearchQuery)
  }, [ingredientSearchQuery])

  const handleSubmit = (e) => {

    //stop reload
    e.preventDefault()

            // set the new ingredient object w/ correct amount
        let quantArr = Object.values(quantity)[0]

        console.log(quantArr)
        ingredient = {
            ...ingredient,
            amount : quantArr
        }
            // update display # at the bottom of the Component
        setShowAmount(Object.values(quantity))

                                    /// everything above here works ! ^^ ///
    
                // change the unit type to whatever is selected in dropdown
    let placeholderArr = ingredientSearchQuery;
    
        // need to find the proper search index
        const searchIndex = ingredientSearchQuery.map(e => e.name).indexOf(ingredient.name);

    placeholderArr[searchIndex].amount = quantArr

    setIngredientSearchQuery(placeholderArr);

    // ******** this forces a re-render (because the above tempArr isnt seen as a valid state change): ****************
    setIngredientSearchQuery([...ingredientSearchQuery]);

  };

  return (
    <>
      <Div key={ingredient._id + ingredient.name}>
        <span>Item : {ingredient.name} </span>

        <form onSubmit={handleSubmit}>
          <label htmlFor="Quantity">Quantity : </label>
          <input
            type="number"
            id="quantity"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
          <Button type="submit" value="Refresh">Refresh </Button>
        </form>

        <span>
          Select Unit Type : <Dropdown ingredient={ingredient} />{" "}
        </span>

        <div> {} {ingredient.name} - {showAmount} ({ingredient.unit_type})</div>
        <Button onClick={() => {handleRemoveOneItem(ingredient)}}>  Remove Item </Button>

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

