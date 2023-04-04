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
                ? <div>Log in to use this section </div>
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

const RecipeWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
  position: fixed;
    top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

  height: 100%;
  width: 91.35vw;



`;

const Button = styled.button`
`;

