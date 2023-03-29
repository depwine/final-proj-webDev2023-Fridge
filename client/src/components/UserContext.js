import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [ ingredientsMaster, setIngredientsMaster] = useState();
  const [ ingredientSearchQuery, setIngredientSearchQuery] = useState([])
  const [ oneIngredient, setOneIngredient] = useState()

  // fetch all ingredients
  // assign to context so that user has an auto-complete
  // whenever they type an ingredient

  useEffect(() => {


    if (!ingredientsMaster) {

      fetch("http://localhost:4000/api/ingredients")

      .then((res) => res.json())
      .then((data) => {

        setIngredientsMaster(data.data)

      })
      .catch((err) => {
        console.log("Error, ", err);
      });
    }


  }, []);


  return (
    <UserContext.Provider value={{setIngredientSearchQuery, ingredientSearchQuery, ingredientsMaster, oneIngredient, setOneIngredient}}>
      {children}
    </UserContext.Provider>
  );
};
