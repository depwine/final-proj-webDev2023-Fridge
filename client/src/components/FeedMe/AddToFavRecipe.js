import styled from "styled-components"
import { useState } from "react"

const AddToFavRecipe = ({ user, recipeInfo }) => {

    const [err, setErr] = useState()

    if (recipeInfo) {
        console.log(recipeInfo)
    }

    const handleAddToFav = () => {

        // Expected body from insomnia:
        /*
            {
                "userId" : "google-oauth2|104384327425244104524", 
                "userName" : "Glib Lakeev",
                "recipeId" : "73420",
                "recipeName" : "Apple Or Peach Strudel"
            }
        */

        const userNameConcat = `${user.given_name} ${user.family_name}`

                // create post body
        const postBody = {
            "userId" : user.sub,
            "userName" : userNameConcat,
            "recipeId" : recipeInfo.id,
            "recipeName" :  recipeInfo.title
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
            <Button onClick = {() => {handleAddToFav()}} >Add To Favourite Recipes</Button>
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