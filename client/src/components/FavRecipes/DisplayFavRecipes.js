import { useEffect } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../Backbone/UserContext";

const DisplayFavRecipes = ({favRecipes}) => {

    const { setPostFlag } = useContext(UserContext);

    const handleRemoveFromFavs = (recipe) => {


                    // body : 
                        /*
                            {
                                "recipeId" : "xxxx",
                                "recipeName" : "xxx"
                            }
                        */

        const bodyParams = {
            "recipeId" : recipe.recipeId,
            "recipeName" :  recipe.recipeName
        }

        console.log(bodyParams)

        fetch ("http://localhost:4000/api/favrecipes", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "DELETE",
              body: JSON.stringify(bodyParams)
            })
            .then((res) => res.json())
            .then((data) => {

             // //refresh state
                setPostFlag(recipe.recipeId)
                
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })

        



    }

    return (<>

        {
            ! favRecipes
            ? <span> Loading ... </span>
            : 
            favRecipes.map((recipe) => {
                return (
                    <>
                        <div key = {recipe.recipeId}>
                            <span>{recipe.recipeName}</span>
                            <img src = {recipe.recipeImage}/>
                            <Button onClick = {() => {handleRemoveFromFavs(recipe)}}>Remove From Favourites</Button>
                        </div>
                    </>
                )
            })
        }
        
    </>)


}

export default DisplayFavRecipes

const Button = styled.button``;
