import Search from "./Search";
import styled from "styled-components";
import { useContext, useState } from "react";
import { UserContext } from "../Backbone/UserContext";
import IngredientContainer from "../FeedMe/IngredientContainer";
import Recipe from "../RecipeDetails/Recipe";

const FeedMe = () => {
  // oneIngredient, setOneIngredient
  const { oneIngredient, ingredientSearchQuery, setIngredientSearchQuery, setOneIngredient, recipes, setRecipes} = useContext(UserContext);

  const [ingError, setIngError] = useState();
  const [allValuesFilled, setAllValuesFilled] = useState(true);
  const [isDuplicate, setIsDuplicate] = useState (false)  
  
  /// ---------------------------------------------FETCH RECIPE------------------------------------------ ///

  // search for recipes once 3 or more items have proper values
  // (name, unit, quantity)


                  // BELOW THIS IS THE SPOON FETCH

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

                              // BELOW THIS IS THE MOCK FETCH ////

  // const fetchRecipe = () => {

  //   setRecipes(null)

  //   // set previous recipe to blank


  //     //test concact above (works)
  // // console.log(searchConcact)

  // fetch (`http://localhost:4000/api/recipes`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //         console.log(data)
  //         setRecipes(data.data)
  //     })
  //     .catch((err) => {
  //         console.log(err)
  //     })

  // }


  /// ---------------------------------------------HANDLE SEARCH---------------------------------- ///

  const handleSearch = () => {
    console.log(ingredientSearchQuery);

    //check array for duplicates (line 109) -- if yes, set error
    let alreadySeen = {};

    if (!oneIngredient) {
      return setIngError(
        "You haven't selected an ingredient, please use the search!"
      );
    } else {

            let valueFlag = true;

                //check that all fields are properly filled
            ingredientSearchQuery.forEach((e) => {

                      //check that all values are properly filled
                  if (e.amount < 0.0001 || e.unit_type === null) {

                    console.log(e.amount, e.unit_type)
                  setAllValuesFilled(false);
                  valueFlag = false;

                  } else {
                  setAllValuesFilled(true);
                  valueFlag = true;
                  }


                    //check for duplicates
                  if (alreadySeen[e.name]){
                      // if there's a duplicate, set value to false
                    alreadySeen[e.name] = false
                  } else {
                      // if no duplicate, set value to true
                    alreadySeen[e.name] = true
                  }
              });

                //if dupe is found
              if (Object.values(alreadySeen).includes(false)){
                  console.log("DUPLICATE FOUND!!!")
                setIsDuplicate(true)
              } else {
                setIsDuplicate(false)
              }


            if (isDuplicate) {
              console.log("DUPLICATE FOUND!!!")
              return setIngError(
                "One or more of your ingridients is a duplicate, please make sure all are unique!"
              );
            }  else {
              setIngError("")
            }


            // if all above IFs are good AND all values are filled, search 
            if (valueFlag) {
                console.log("all values filled");

                // flicker a Searching for a few seconds to clear error but also show
                //user input on "Search for Recipes"
                setIngError("Searching ...");

                setTimeout(() => {
                setIngError("");
                }, 1000);

                console.log("Searching for recipes!")
                fetchRecipe()

                // else, throw error until fixed.
            } else {
                console.log("value issue");
                setIngError(
                "There is an issue with your fields, please set POSITIVE (>1) quantity and unit for each ingredient!"
                );
            }
    }
  };

  const handeClearRecipes = () => {
    setRecipes()
    setIngredientSearchQuery([])
    setOneIngredient()
    setIngError("")
  }  

  return (
    <Wrapper>
      <Left>
      <SearchDiv>
         <Search />
      </SearchDiv>

      <SearchResultsDiv>

            {
            ! oneIngredient 
            ? (<Div> Search for your first ingredient ... </Div>) 
            : ( <IngredientContainer />)
            }



            {  ingredientSearchQuery.length < 3
              ? <LookForThree>Please look up at least 3 unique ingredients to Search Recipes</LookForThree>
              : 
              (
                <>
                  <Buttons>
                    <Button onClick ={ handeClearRecipes }>Clear Recipes</Button>
                    <Button onClick={ handleSearch }>Search for Recipes</Button>
                  </Buttons>
                </>
              )

            }

      </SearchResultsDiv>

      {
      ! ingError 
      ? <div>{null}</div> 
      : <Error>{ingError}</Error>
      }
      </Left>
      <Right>
      {
        ! recipes
        ? <span></span>
        : <Recipe recipes={ recipes }/>
      }
      </Right>
</Wrapper>

  );
};

export default FeedMe;

const Error = styled.div`

  font-size: 20px;
  margin: 20px;
  text-align: center;
  font-style: italic;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 91.35vw;
  height: 88.45vh;
`;

const Left = styled.div`
  /* outline: 2px solid red; */
  width: 50%;
  height: 100%;
  height: 100.7%;

`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 10px;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
  /* outline: 2px solid green; */
  width: 50%;
  height: 100.7%;
  `;

const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`;

const SearchResultsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`;


const LookForThree = styled.span`
  padding: 20px;
`;

const Div = styled.div`
  font-size: 30px;
  margin: 20px;
`;

const Button = styled.button`
  height: 50px;
  margin: 0 0 0 10px;
  border-radius: 15px;
  width: 150px;
  background-color: grey;
  color: white;
  border: none;
  font-size: 18px;

  box-shadow: 3px 3px 3px lightgrey;

  &:hover{
    cursor: pointer;
    background-color: darkgray;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`;



