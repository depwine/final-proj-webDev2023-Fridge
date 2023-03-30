import Search from "./Search";
import styled from "styled-components";
import { useContext, useState } from "react";
import { UserContext } from "../Backbone/UserContext";
import IngredientContainer from "../FeedMe/IngredientContainer";
import Recipe from "./Recipe";

const FeedMe = () => {
  // oneIngredient, setOneIngredient
  const { oneIngredient, ingredientSearchQuery } = useContext(UserContext);

  const [ingError, setIngError] = useState();
  const [allValuesFilled, setAllValuesFilled] = useState(true);
  const [recipes, setRecipes] = useState()
  

  // search for recipes once 3 or more items have proper values
  // (name, unit, quantity)

  const fetchRecipe = () => {

    let ingredientNames = ingredientSearchQuery.map((e) => {
        return e.name
    })

    let url = "https://api.spoonacular.com/recipes/findByIngredients"
    let API = {        "apiKey": "eb1898ed1b48481180b8c86e7e5ab6f9"    }
    let query = ingredientNames
    let number = 2;

    let searchConcact = `${url}?apiKey=${API.apiKey}&ingredients=${query}&number=${number}`

        //test concact above (works)
    // console.log(searchConcact)

    fetch (`${searchConcact}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setRecipes(data)
        })
        .catch((err) => {
            console.log(err)
        })

            
  }

  const handleSearch = () => {
    console.log(ingredientSearchQuery);

    if (!oneIngredient) {
      return setIngError(
        "You haven't selected an ingredient, please use the search!"
      );
    } else {

            //check that all fields are properly filled
            ingredientSearchQuery.forEach((e) => {
                if (e.amount < 0.0001 || e.unit_type === null) {
                setAllValuesFilled(false);
                } else {
                setAllValuesFilled(true);
                }
                console.log(e.amount, e.unit_type);
            });


            // if the an ingredient has been chosed, check all fields
            if (allValuesFilled) {
                console.log("all values filled");

                // flicker a Searching for a few seconds to clear error but also show
                //user input on "Search for Recipes"
                setIngError("Searching ...");

                setTimeout(() => {
                setIngError("");
                }, 1000);

                console.log("Searching for recipes!")
                fetchRecipe()

            } else {
                console.log("value issue");
                setIngError(
                "There is an issue with your fields, please set quanity and unit for each ingredient!"
                );
            }
    }
  };
  

  return (
    <>
      <Search />
      {
      !oneIngredient 
      ? (<Div>Search for your first ingredient ... </Div>) 
      : ( <IngredientContainer />)
      }



      { ingredientSearchQuery.length < 3
        ? <span>Please look up at least 3 unique ingredients to Search Recipes</span>
        : <Button onClick={handleSearch}>Search for Recipes</Button>
      }

      {!ingError ? <div>{null}</div> : <div>{ingError}</div>}

      {
        ! recipes
        ? <span></span>
        : <Recipe recipes={recipes}/>
      }
    </>
  );
};

export default FeedMe;

const Div = styled.div`
  font-size: 40px;
  margin: 50px;
`;

const Button = styled.button``;
