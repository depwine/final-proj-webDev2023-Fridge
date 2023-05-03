import styled from "styled-components";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../Backbone/UserContext";
import { useContext, useState} from "react";
import {BiLoader} from "react-icons/bi"
import Recipe from "../RecipeDetails/Recipe";

const Homepage = () => {

  const { user } = useAuth0();
  const { setFavRecipes, recipes, setRecipes, favRecipes} = useContext(UserContext);
  const [ trendingRecipes, setTrendingRecipes ] = useState()

  // get a few random recipes as trending

  // on home page, if user is logged in and bounced back to "/"
    // fetch all favourites from back-end to populate "/fav-recipes"

  useEffect(() => {

    if (user) {

          const concatUserName = `${user.given_name} ${user.family_name}`;
    
          /// get fav recipes
          fetch(
            `/api/favrecipes?userId=${user.sub}&userName=${concatUserName}`
          )
            .then((res) => res.json())
            .then((data) => {
              // console.log("Fav recipes for user fetch: ",data.data);
              // console.log("setting favourites for logged-in user");
              setFavRecipes(data.data);
            })
            .catch((err) => {
              console.log(err);
              setFavRecipes();
            });
        
    }

  }, [user])


      // fetch spoon API to populate 5 trending recipes
  useEffect(() => {

                  // BELOW THIS IS THE SPOON FETCH
                
                    let url = "https://api.spoonacular.com/recipes/random"
                    let API = {        "apiKey": "eb1898ed1b48481180b8c86e7e5ab6f9"    }
                    let number = 10;
                
                    let searchConcact = `${url}?apiKey=${API.apiKey}&number=${number}`                
                
                    fetch (`${searchConcact}`)
                        .then((res) => res.json())
                        .then((data) => {
                            // console.log(data)
                            // console.log("successful lookup of random recipes")
                            setTrendingRecipes(data.recipes)
                        })
                        .catch((err) => {
                            console.log(err)
                        })         

                    //mock data fetch

                    // fetch ("http://localhost:4000/api/randomrecipes")
                    //   .then((res) => res.json())
                    //   .then((data) => {
                    //     setTrendingRecipes(data.data)
                    //   })
                    //   .catch((err) => {
                    //     console.log(err)
                    //   })


  }, [])


  return (

      <Wrapper>
        <H1>Trending Recipes:</H1>

          {
            ! trendingRecipes
            ? <RecipeWrapper> <LoadingFeedDiv> <BiLoader/> </LoadingFeedDiv> </RecipeWrapper>
            : (<RecipeWrapper> <Recipe recipes={ trendingRecipes }/> </RecipeWrapper>)
          }
      </Wrapper>

  );
}

export default Homepage;

const H1 = styled.h1`
  color: #3E3C61;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 98%;
  width: 100%;

  background-image: linear-gradient(
  180deg,
  hsl(0deg 0% 100%) 0%,
  hsl(0deg 0% 98%) 17%,
  hsl(0deg 0% 96%) 33%,
  hsl(0deg 0% 94%) 50%,
  hsl(0deg 0% 92%) 67%,
  hsl(0deg 0% 90%) 83%,
  hsl(0deg 0% 89%) 100%
);

`;

const RecipeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
  column-gap: 20px;
`;

const LoadingFeedDiv = styled.div`
margin: 100px 0 0 0;
display: flex;
justify-content: center;
align-items: center;
width: 800px;
font-size: 50px;
font-weight: bold;
animation: rotation 2s infinite linear;
color: #3E3C61;

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`;
