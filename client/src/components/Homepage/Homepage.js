import styled from "styled-components";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../Backbone/UserContext";
import { useContext, useState} from "react";
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
            `http://localhost:4000/api/favrecipes?userId=${user.sub}&userName=${concatUserName}`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log("Fav recipes for user fetch: ",data.data);
              console.log("setting favourites for logged-in user");
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
                
                    // let url = "https://api.spoonacular.com/recipes/random"
                    // let API = {        "apiKey": "eb1898ed1b48481180b8c86e7e5ab6f9"    }
                    // let number = 10;
                
                    // let searchConcact = `${url}?apiKey=${API.apiKey}&number=${number}`                
                
                    // fetch (`${searchConcact}`)
                    //     .then((res) => res.json())
                    //     .then((data) => {
                    //         console.log(data)
                    //         console.log("successful lookup of random recipes")
                    //         setRecipes(data)
                    //     })
                    //     .catch((err) => {
                    //         console.log(err)
                    //     })         

                    //mock data fetch

                    fetch ("http://localhost:4000/api/randomrecipes")
                      .then((res) => res.json())
                      .then((data) => {
                        setTrendingRecipes(data.data)
                      })
                      .catch((err) => {
                        console.log(err)
                      })


  }, [])


  return (

      <Wrapper>
        <h1>Trending Recipes:</h1>

          {
            ! trendingRecipes
            ? <span> Loading ... </span>
            : (<RecipeWrapper> <Recipe recipes={ trendingRecipes }/> </RecipeWrapper>)
          }
      </Wrapper>

  );
}

export default Homepage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 91.35vw;
`;

const RecipeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
  column-gap: 20px;
`;

const Button = styled.button`
`;
