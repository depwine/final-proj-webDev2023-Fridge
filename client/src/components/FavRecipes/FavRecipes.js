import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { UserContext } from "../Backbone/UserContext";
import DisplayFavRecipes from "./DisplayFavRecipes";
import { useEffect } from "react";


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
                        {/* UserId : {user.} */}
                        {
                            ! favRecipes
                            ? (
                                <>
                                    <div>Add some recipes!</div>
                                    {/* <div><Button onClick ={() => { console.log(favRecipes) }}> Test show Recipes </Button></div>                               */}
                                 </>
                            )
                            : ( 
                                <>
                                    {/* <div><Button onClick={() => {  console.log(favRecipes)  }}> Show Recipes </Button></div> */}
                                    <DisplayFavRecipes favRecipes={favRecipes}/>
                                </>
                               )

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

const Button = styled.button`
`;

