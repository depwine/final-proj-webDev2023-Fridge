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

                    setFavRecipes((prev) => [                       
                        ...prev,
                        postBody
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
        <Wrapper>
            <ErrDiv>
                {
                    !err
                    ? null
                    : 
                    (
                        <Err>{err}</Err>
                    ) 
                    
                }
            </ErrDiv>
            <ButtonDiv>
                    {
                        !user
                        ? null 
                        :<Button onClick = {() => {handleAddToFav()}} >Add To Favourite Recipes</Button>
                    }
            </ButtonDiv>


        </Wrapper>
    )

}

export default AddToFavRecipe

const ErrDiv = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: right;
    margin: 0 20px 0 0;
`;

const ButtonDiv = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    align-content: center;
    justify-content: center;
`;

const Button = styled.button`
    font-weight: bold;
    border-radius: 15px;
    border: none;
    margin: 0 0 0 0;

    background-color: #6e1533;;
    color: white;
    padding: 10px;
    box-shadow: 2px 2px 2px lavender;

    &:hover{

        cursor: pointer;
        background-color: #b8607c;
        color: white;

    }
`;

const Err = styled.span`


`;