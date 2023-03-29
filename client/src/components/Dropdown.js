import styled from "styled-components";
import { useContext, useState} from "react";
import { UserContext } from "./UserContext";

const Dropdown = ({ ingredient }) => {
  const {  ingredientSearchQuery, setIngredientSearchQuery } =
    useContext(UserContext);

    const [value, setValue] = useState ("...")

  const dropDownUnitOptions = [
    { name: "(g) Grams", value: "g" },
    { name: "(kg) Kilograms", value: "kg" },
    { name: "(mL) Milliliters", value: "mL" },
    { name: "(L) Liters", value: "L" },
    { name: "Whole Units", value: "pcs" },
  ];

  //set to category onChange
  const handleChange = (e) => {

    console.log(e.target.value)
    setValue(e.target.value)


    // change the unit type to whatever is selected in dropdown
    let placeholderArr = ingredientSearchQuery;
    placeholderArr[ingredientSearchQuery.indexOf(ingredient)].unit_type =
      e.target.value;

    setIngredientSearchQuery(placeholderArr);

    // ******** this forces a re-render (because the above tempArr isnt seen as a valid state change): ****************
    setIngredientSearchQuery([...ingredientSearchQuery]);

  };
  return (


    <>
      <Select onChange={handleChange}>
        <option value={value}>{value}</option>

        {!dropDownUnitOptions ? (
          <div> Loading ... </div>
        ) : (
          dropDownUnitOptions.map((unit) => {

            const randomID = Math.floor(Math.random() * 100000);
            return (
              <option key={randomID} value={unit.value} >
                {unit.name}
              </option>
            );
          })
        )}
      </Select>
    </>
  );
};

export default Dropdown;

const Select = styled.select`
  padding: 5px 25px 5px 5px;
  margin-left: 25px;
  margin-top: 10px;
  border-radius: 3px;
  font-size: 18px;
  font-family: var(--font-heading);
  font-weight: bold;
  border: solid 3px black;
`;
