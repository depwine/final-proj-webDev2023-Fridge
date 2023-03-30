import { UserContext } from "../Backbone/UserContext";
import { useContext, useEffect, useState} from "react";

const Quantity = ({ ingredient }) => {

  const { ingredientSearchQuery } = useContext(UserContext);
  const [ unit, setUnit ] = useState()

  console.log(ingredientSearchQuery)
  console.log(ingredient)

  useEffect(() => {


    if (ingredientSearchQuery[ingredientSearchQuery.indexOf(ingredient)].unit_type){
        setUnit (ingredientSearchQuery[ingredientSearchQuery.indexOf(ingredient)].unit_type)
        console.log("??????????? quantity . js")
    }    

  }, [ingredientSearchQuery])


  return (
    <>
    {
        ingredient.unit_type
        ? <span>Unit Type : null</span>
        : <> Unit Type : {ingredient.amount}</>
    }
    </>
  );
};

export default Quantity;
