import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

      // 1000 top recipe State for the auto-complete search field in FeedMe
  const [ingredientsMaster, setIngredientsMaster] = useState();

      // For searching the Spoonacular API w/ provided ingredients
  const [ingredientSearchQuery, setIngredientSearchQuery] = useState([]);
  const [oneIngredient, setOneIngredient] = useState();

      // RECIPE STATES 
  const [favRecipes, setFavRecipes] = useState();
  const [recipes, setRecipes] = useState();

    // USER INFO / LOGINS STATES 
  const [loggedUser, setLoggedUser] = useState();
  const [postFlag, setPostFlag] = useState()

  // fetch all ingredients
  // assign to context so that user has an auto-complete
  // whenever they type an ingredient

  useEffect(() => {
    if (!ingredientsMaster) {
      fetch("http://localhost:4000/api/ingredients")
        .then((res) => res.json())
        .then((data) => {
          setIngredientsMaster(data.data);
        })
        .catch((err) => {
          console.log("Error, ", err);
        });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        setLoggedUser,

        postFlag, 
        setPostFlag,

        favRecipes,
        setFavRecipes,

        recipes,
        setRecipes,

        setIngredientSearchQuery,
        ingredientSearchQuery,

        ingredientsMaster,

        oneIngredient,
        setOneIngredient,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
