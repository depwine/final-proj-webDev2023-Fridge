import { UserContext } from "./UserContext";
import { useContext, useEffect, useState} from "react";

const Units = ({ ingredient }) => {

  const { ingredientSearchQuery } = useContext(UserContext);
  const [ unit, setUnit ] = useState()


  useEffect(() => {

    if (ingredientSearchQuery[ingredientSearchQuery.indexOf(ingredient)].unit_type){
        setUnit (ingredientSearchQuery[ingredientSearchQuery.indexOf(ingredient)].unit_type)
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

export default Units;
