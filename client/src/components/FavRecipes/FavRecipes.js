import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { UserContext } from "../Backbone/UserContext";
import DisplayFavRecipes from "./DisplayFavRecipes";

const FavRecipes = () => {

    const { user } = useAuth0();
    const { favRecipes } = useContext(UserContext);

    useEffect(() => {

    }, [favRecipes])

    return (
        <Wrapper>
            {
                ! user
                ? <H1Center>Log in to use this section </H1Center>
                : (
                    <>
                        <h1>Favourite Recipes</h1>                     
                        {
                            ! favRecipes || favRecipes.length < 1
                            ? (
                                <>
                                    <div>Add some recipes!</div>
                                 </>
                            )
                            : ( 
                                <RecipeWrap>
                                    <DisplayFavRecipes favRecipes={favRecipes}/>
                                </RecipeWrap>
                               )
                        }
                    </>
                )
            }

        </Wrapper>
    )

}

export default FavRecipes

const H1Center = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
`  ;

const RecipeWrap = styled.div`
    display: flex;
    height: 100%;
    row-gap: 20px;
    column-gap: 20px;
    flex-direction: column;
    /* border: 1px solid blue; */
    justify-content: start;
    align-items: center;

`;

const Wrapper = styled.div`
    /* border: 1px solid blue; */
    position: fixed;
    top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 92%;
    width: 100%;
    overflow-y: scroll;


`;

const Button = styled.button`
`;

