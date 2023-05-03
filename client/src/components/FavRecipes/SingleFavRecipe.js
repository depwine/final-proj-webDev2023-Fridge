import styled from "styled-components";
import { useContext, useState } from "react";
import { UserContext } from "../Backbone/UserContext";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const SingleFavRecipe = ({recipe}) => {

    const { setFavRecipes } = useContext(UserContext);
    const { user } = useAuth0();

    const nav = useNavigate();

    const [err, setErr] = useState("");    

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
        // console.log("deleted!");
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
        `/api/favrecipes?userId=${user.sub}&userName=${concatUserName}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log("Fav recipes for user re-fetch: ", data.data);

          setFavRecipes(data.data);
        })

        .catch((err) => {
          console.log(err);
          setFavRecipes();
        });
    }
  };

  const handleRemoveFromFavs = (recipe) => {

    setErr("Deleting ... ")

    setTimeout(() => {
      setErr ("")
    },1500)

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
        <Wrapper>


    
        <Div onClick = { () => {
        handleRecipeDetails(recipe)
        }}>
            <Img src={recipe.recipeImage} />
            <Name>{recipe.recipeName}</Name>
        </Div>

        <Button
        onClick={() => {
        handleRemoveFromFavs(recipe);
        }}
        >
            Delete
        </Button>

        <ErrDiv>
            {err}
        </ErrDiv>
        </Wrapper>

    )

}

export default SingleFavRecipe



const ErrDiv = styled.div`
  margin: 0 0 0 20px;
  width: 100px;
  font-style: italic;
`;

const Name = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  margin: 0 -100px 0 0;
`;

const Button = styled.button`

  height: 110px;
  border-radius: 15px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border: none;
  color: white;
  background-color: #912247;
  transition: 0.1s ease-in-out;

  &:hover{
    cursor: pointer;
    background-color: #6e1533;
    border: 5px solid #6e1533;

  }
`;

const Div = styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;   
    width: 700px;
    height: 100px;
    padding: 5px;
    margin: 5px 0 5px 0;
    box-shadow: 0px 0px 5px lightgrey;

    &:hover { 
        cursor: pointer; 
        outline: 2px solid #912247;
        box-shadow: 4px 4px 4px lightgray;
    }
    
`;

const Img = styled.img`
    width: 150px;
    
`;

