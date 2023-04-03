import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../Backbone/UserContext";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const DisplayFavRecipes = ({ favRecipes }) => {
  const { setFavRecipes } = useContext(UserContext);
  const { user } = useAuth0();

  const nav = useNavigate();

  // remove from DB
  const deleteFetch = (bodyParams) => {
    fetch("http://localhost:4000/api/favrecipes", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify(bodyParams),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "deleting from favourites!");
        console.log("deleted!");
        // new fetch, re-set state to new favourites
        reFetchFavs();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const reFetchFavs = () => {
    // fetch new data
    if (user) {
      const concatUserName = `${user.given_name} ${user.family_name}`;

      // re-fetch new Favs (post delete)
      fetch(
        `http://localhost:4000/api/favrecipes?userId=${user.sub}&userName=${concatUserName}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Fav recipes for user re-fetch: ", data.data);

          setFavRecipes(data.data);
        })

        .catch((err) => {
          console.log(err);
          setFavRecipes();
        });
    }
  };

  const handleRemoveFromFavs = (recipe) => {
    // body :
    /*
                            {
                                "recipeId" : "xxxx",
                                "recipeName" : "xxx"
                            }
                        */

    const bodyParams = {
      recipeId: recipe.recipeId,
      recipeName: recipe.recipeName,
    };
    // delete
    deleteFetch(bodyParams);
  };

  const handleRecipeDetails = (recipe) => {

                            // get mock recipe for testing

                      // fetch(`http://localhost:4000/api/recipe/${recipe.recipeId}`)
                      //   .then((res) => res.json())
                      //   .then((data) => {
                      //     console.log(data);
                      //     let fetchedRecipe = data.data;

                      //     nav("/recipe-details", { state: { data: fetchedRecipe } });
                      //   })
                      //   .catch((err) => {
                      //     console.log(err)
                      //   })

      //fetch actual recipe by ID from API

      const recipeId = recipe.recipeId
      const url = `https://api.spoonacular.com/recipes/${recipeId}/information`
      const API = {        "apiKey": "eb1898ed1b48481180b8c86e7e5ab6f9"    }
  
      const searchConcact = `${url}?apiKey=${API.apiKey}`  

      fetch(searchConcact)
        .then((res) => res.json())
        .then((data) => {
          const fetchedRecipe = data;
            // bounce to recipe details, send fetchedRecipe to that component for displaying.
          nav("/recipe-details", { state: { data: fetchedRecipe } });
        })
        .catch((err) => {
          console.log(err)
        })

  };

  return (
    <>
      {!favRecipes ? (
        <span> Loading ... </span>
      ) : (
        favRecipes.map((recipe) => {
          return (
            <div key={recipe._id}>
              <span>{recipe.recipeName}</span>
              <img src={recipe.recipeImage} />
              <Button
                onClick={() => {
                  handleRecipeDetails(recipe);
                }}
              >
                Recipe Details
              </Button>
              <span>?</span>
              <Button
                onClick={() => {
                  handleRemoveFromFavs(recipe);
                }}
              >
                Remove From Favourites
              </Button>
            </div>
          );
        })
      )}
    </>
  );
};

export default DisplayFavRecipes;

const Button = styled.button``;
