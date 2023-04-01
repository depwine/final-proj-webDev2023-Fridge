import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { UserContext } from "../Backbone/UserContext";
import DisplayFavRecipes from "./DisplayFavRecipes";


const FavRecipes = () => {

    const { user } = useAuth0();
    const { favRecipes } = useContext(UserContext);

    return (
        <Wrapper>

            {
                ! user
                ? <div>Log in to use this section </div>
                : (
                    <>
                        User : {user.name}                        

                        {
                            ! favRecipes
                            ? <div>Add some recipes!</div>
                            : <DisplayFavRecipes />

                        }
                    </>
                )
            }

        </Wrapper>
    )

}

export default FavRecipes

const Wrapper = styled.div`
  height: 100%;
  width: 91.35vw;
`;

