import styled from "styled-components"
import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../Backbone/UserContext"

const AddToFavRecipe = ({ user, recipeInfo }) => {

    const [err, setErr] = useState()

    const { favRecipes, setFavRecipes } = useContext(UserContext);


    const handleAddToFav = () => {

        // Expected body from back-end:
        /*
            {
                "userId" : "google-oauth2|xxxxx", 
                "userName" : "Name Lastname",
                "recipeId" : "xxxxx",
                "recipeName" : "Apple Or Peach Strudel"
                "recipeImage:" : "url"
            }
        */
       

        const userNameConcat = `${user.given_name} ${user.family_name}`

                // create post body
        const postBody = {
            "userId" : user.sub,
            "userName" : userNameConcat,
            "recipeId" : recipeInfo.id,
            "recipeName" :  recipeInfo.title,
            "recipeImage" : recipeInfo.image
        }

        console.log(postBody)

        // send
        fetch("http://localhost:4000/api/favrecipes",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(postBody)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)    


                   // add to fave recipes state
                    console.log(favRecipes)
                    let recipeToAdd = data.data

                    setFavRecipes((prev) => [                       
                        ...prev,
                        ...recipeToAdd
                    ])           


                if (data.status === 200) {
                    setErr("Recipe added to your Favourites!")

                    setTimeout(() => {
                        setErr(null)
                    }, 1000)
                }

                if (data.status === 401) {
                    setErr("This recipe is already in your favourites!")

                    setTimeout(() => {
                        setErr(null)
                    }, 1000)
                }
            })
            .catch((err) => {
                setErr(err)
                console.log(err)
            })
    }



    return (
        <>
            {
                !user
                ? null 
                :<Button onClick = {() => {handleAddToFav()}} >Add To Favourite Recipes</Button>
            }
            {
                err && 
                (
                    <Err>{err}</Err>
                ) 
                
            }
        </>
    )

}

export default AddToFavRecipe

const Button = styled.button`

`;

const Err = styled.span`


`;