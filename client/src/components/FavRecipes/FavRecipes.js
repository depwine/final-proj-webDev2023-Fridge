import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { UserContext } from "../Backbone/UserContext";
import DisplayFavRecipes from "./DisplayFavRecipes";
import { useEffect } from "react";


const FavRecipes = () => {

    const { user } = useAuth0();
    const { favRecipes, setFavRecipes } = useContext(UserContext);

    if (user) {
        console.log(user)
    }

    // useEffect(() => {
        
    //     const lookupUrl =""

    //     if (user) {

    //                 /// NO URL SET
    //         fetch (lookupUrl)
    //         .then((res) => res.json())
    //         .then ((data) => {
    //             console.log(data)
    //             // setFavRecipes(data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //             setFavRecipes()
    //         })
    //     }

    // }, [user])

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

