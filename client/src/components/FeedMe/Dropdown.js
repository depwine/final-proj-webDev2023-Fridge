import styled from "styled-components";
import { useContext, useState} from "react";
import { UserContext } from "../Backbone/UserContext";

const Dropdown = ({ ingredient }) => {
  const {  ingredientSearchQuery, setIngredientSearchQuery } =
    useContext(UserContext);

    const [value, setValue] = useState ("Select ...")

  const dropDownUnitOptions = [
    { name: "(g) Grams", value: "g" },
    { name: "(kg) Kilograms", value: "kg" },
    { name: "(mL) Milliliters", value: "mL" },
    { name: "(L) Liters", value: "L" },
    { name: "Cup", value: "cup" },
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
        <Option value={value}>{value}</Option>

        {!dropDownUnitOptions ? (
          <div> Loading ... </div>
        ) : (
          dropDownUnitOptions.map((unit) => {

            const randomID = Math.floor(Math.random() * 100000);
            return (
              <Option key={randomID} value={unit.value} >
                {unit.name}
              </Option>
            );
          })
        )}
      </Select>
    </>
  );
};

export default Dropdown;

const Option = styled.option`
  font-size: 15px;
  font-weight: normal;
`;

const Select = styled.select`
  border: 1px solid lightgrey;
  border-radius: 5px;
  font-size: 15px;
  width: 120px;
  height: 20px;
  text-align: center;
`;
