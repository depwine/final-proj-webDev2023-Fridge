import Search from "./Search";
import styled from "styled-components";
import { useContext, useState } from "react";
import { UserContext } from "../Backbone/UserContext";
import IngredientContainer from "../FeedMe/IngredientContainer";
import SearchResultRecipe from "./SearchResultRecipe";
import { useEffect } from "react";

const FeedMe = () => {
  // oneIngredient, setOneIngredient
  const { oneIngredient, ingredientSearchQuery, setIngredientSearchQuery, setOneIngredient, recipes, setRecipes} = useContext(UserContext);

  const [ingError, setIngError] = useState();
  const [allValuesFilled, setAllValuesFilled] = useState(true);
  const [isDuplicate, setIsDuplicate] = useState (false)  
  const [usedIngredients, setUsedIngredients] = useState()



  useEffect(() => {


    handeClearRecipes()

    console.log(
      recipes,
      oneIngredient,
      ingredientSearchQuery,
    )

  }, [])

  
  /// ---------------------------------------------FETCH RECIPE------------------------------------------ ///

  // search for recipes once 3 or more items have proper values
  // (name, unit, quantity)

  const getDetailsForEachFetchesRecipe = (data) => {

    const idArray = data.map((recipe) => {
      return recipe.id
    })

    console.log("ID ARRAY", idArray)


    let url = `https://api.spoonacular.com/recipes/informationBulk`
    let API = {        "apiKey": "eb1898ed1b48481180b8c86e7e5ab6f9"    }
    let searchQuery = `ids=${idArray}`

     let searchConcact = `${url}?apiKey=${API.apiKey}&${searchQuery}`

     console.log(searchConcact)

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

                  // BELOW THIS IS THE SPOON FETCH

  const fetchRecipe = () => {

    let ingredientNames = ingredientSearchQuery.map((e) => {
        return e.name
    })

    let url = "https://api.spoonacular.com/recipes/findByIngredients"
    let API = {        "apiKey": "eb1898ed1b48481180b8c86e7e5ab6f9"    }
    let query = ingredientNames
    let number = 6;

    let searchConcact = `${url}?apiKey=${API.apiKey}&ingredients=${query}&number=${number}`

        //test concact above (works)
    // console.log(searchConcact)

    fetch (`${searchConcact}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

              // assign this to a state in order to populate Recipe component's "used ingredients" field
              setUsedIngredients(data)

              // call another fetch in order to set the recipe details
            getDetailsForEachFetchesRecipe(data)
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
                }, 2000);

                console.log("Searching for recipes!")
                fetchRecipe()

                // else, throw error until fixed.
            } else {
                console.log("value issue");
                setIngError(
                "Please `Add` Each ingredient!"
                );
            }
    }
  };

  const handeClearRecipes = () => {
    setRecipes(null)
    setIngredientSearchQuery([])
    setOneIngredient(null)
    setIngError(null)
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
        : <SearchResultRecipe recipes = { recipes } usedIngredients = {usedIngredients} />
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
  color: #6e1533;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 80px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;

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

const Left = styled.div`
  /* outline: 2px solid red; */
  width: 50%;
  height: 100%;
`;

const Right = styled.div`
  /* outline: 2px solid green; */
  width: 820px;
  margin: 0 0 0 120px;
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  justify-content: start;
  align-content: flex-start;
  align-items: center;
  padding: 15px 0 0 0px;
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
  color: #6e1533;
`;

const Div = styled.div`
  font-size: 25px;
  margin: 0 0 10px 0;
`;

const Button = styled.button`
  height: 50px;
  margin: 0 0 0 10px;
  border-radius: 15px;
  width: 150px;
  background-color: #912247;
  color: white;
  border: none;
  font-size: 18px;

  box-shadow: 3px 3px 3px lightgrey;
  transition: 0.1s ease-in-out;

  &:hover{
    cursor: pointer;
				background-color: #b8607c;
				color: white;	
    
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`;



