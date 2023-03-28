import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [ingredientsMaster, setIngredientsMaster] = useState();
  const [ingredients, setIngredients] = useState()

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

  if (ingredientsMaster && !ingredients) {

    const tempArray = ingredientsMaster.map((ingredient) => {
      return (ingredient.ingredient)
    })

    setIngredients(tempArray)

  }

  return (
    <UserContext.Provider value={{ ingredients }}>
      {children}
    </UserContext.Provider>
  );
};
