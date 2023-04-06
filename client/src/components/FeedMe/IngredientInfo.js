import Dropdown from "./Dropdown";
import { useContext, useState } from "react";
import { UserContext } from "../Backbone/UserContext";
import styled from "styled-components";

const IngredientInfo = ({ingredient}) => {

    const { ingredientSearchQuery, setIngredientSearchQuery } =
    useContext(UserContext);

    const [quantity, setQuantity] = useState(0)
    const [showAmount, setShowAmount] = useState (0)

    const [err, setErr] = useState("")

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
// useEffect(() => {
//     console.log(ingredientSearchQuery)
// }, [ingredientSearchQuery])



    // when the user hits "refresh" on
    // the Quantity of items
    // it pushes the entire object to the master query
                            // ex, {_id: '642360cb9c61cf5a7ec0e066', name: 'almonds', id: 12061, amount: '12', unit_type: 'g'}

            // handleSubmit does all that ^ 
  const handleRefresh = (e) => {

    //stop reload
    e.preventDefault()

    console.log(Object.values(quantity)[0])
    console.log(ingredient.unit_type)

    // validate
                    // if quantity is <1 or null OR
                      // if unit type isnt set
      if (!ingredient.unit_type || Object.values(quantity)[0] === null || Object.values(quantity)[0] < 0.0001){



        setErr("Please Select a Quantity and Unit Type before adding")

        setTimeout(() => {
          setErr("")

        }, 1500)

      } else {        

        setErr("Ingredient added to search!")

        setTimeout(() => {
          setErr("")

        }, 1500)
        
            // set the new ingredient object w/ correct amount
            let quantArr = Object.values(quantity)[0]

            console.log(quantArr)
            ingredient = {
                ...ingredient,
                amount : quantArr
            }
                // update display # at the bottom of the Component
            setShowAmount(Object.values(quantity))
        
                    // change the unit type to whatever is selected in dropdown
        let placeholderArr = ingredientSearchQuery;
        
            // need to find the proper search index
            const searchIndex = ingredientSearchQuery.map(e => e.name).indexOf(ingredient.name);
    
        placeholderArr[searchIndex].amount = quantArr
    
        setIngredientSearchQuery(placeholderArr);
    
        // ******** this forces a re-render (because the above tempArr isnt seen as a valid state change): ****************
        setIngredientSearchQuery([...ingredientSearchQuery]);

      }
  };

  return (
    <Wrapper>


      <Div key={ingredient._id + ingredient.name}>

          <Item> 
            <span>Item:</span> 
            <ItemName>{ingredient.name}</ItemName> 
          </Item>

          <Form onSubmit={handleRefresh}>
            <Level>

              <Label htmlFor="Quantity">Quantity : </Label>
              <Input
                type="number"
                id="quantity"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
              />        
            </Level>




          <Units>
            <span>Units :</span>
            <Dropdown ingredient={ingredient} />{" "}
          </Units>

          <ItemSummary> 
            <span>{ingredient.name}</span>
            <span>{showAmount} ({ingredient.unit_type})</span>
          </ItemSummary>

          <Remove onClick={() => {handleRemoveOneItem(ingredient)}}>  Remove </Remove>
          <Button type="submit" value="Refresh">Add</Button>
          </Form>

      </Div>

      
      <ErrDiv>
          {err}
      </ErrDiv>


      </Wrapper>

  );

};

export default IngredientInfo;

const ErrDiv = styled.div`
  display: flex;
  font-style : italic;
  font-size: 14px;
  margin: 0 220px 0 10px;
  width: 150px;
  color: #6e1533;
`;

const Wrapper = styled.div`
  height: 60px;
  margin: 0 0 0 230px;
  width: 1300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const ItemSummary = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  width: 150px;
  height: 50px;
  margin: 0 10px 0 0;
  align-items: flex-end;
  justify-content: center;
  background-color: #ffffff;
  font-weight: bold;
  text-transform: capitalize;
  color: #6e1533;
`;

const Div = styled.div`

background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 770px;
  outline: 2px solid white;
  box-shadow: 0px 0px 5px lightgrey;
  font-size: 15px;
  margin: 5px 0px 0px 0;
  justify-content: space-between;
  align-items: center;

  &:hover{
    box-shadow: 0px 0px 5px grey;
  }
  
`;

const Remove = styled.button`
  height: 50px;
  border: none;
  background-color: #912247;
  	color: white;
  font-size: 15px;

  &:hover{
    cursor: pointer;
    background-color: #b8607c;
    color: white;	
  }

`

const Label = styled.label`

  font-size: 15px;
`;

const Level = styled.span`
  display: flex;
  flex-direction: column;
  row-gap: 3px;

`;

const ItemName = styled.span`
  font-weight: bold;
  padding: 0 0 0 10px;
  text-transform: capitalize;
  
`;

const Units = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 20px 0 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 40px;
  margin: 0 0 0 10px;
  text-align: center;

  border: 1px solid lightgrey;
  border-radius: 15px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  row-gap: 20px;
  width: 150px;
  background-color: #912247;
  color: white;
  border-radius: 15px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  height: 50px;
  padding: 0px 10px 0 10px;


`;

const Button = styled.button`
  position: relative;
  margin: 0 0 0px 10px;
  border-radius: 15px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  width: 65px;
  background-color: #912247;	
  color: white;
  border: none;
  font-size: 15px;
  height: 50px;

  &:hover{
        cursor: pointer;
				background-color: #b8607c;
				color: white;	
  }


`;

