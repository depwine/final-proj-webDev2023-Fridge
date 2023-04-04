import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import AddToFavRecipe from "../FeedMe/AddToFavRecipe";


const Header = ({recipeInfo}) => {

    const { user } = useAuth0();   


    return (
        <>
            <H1>Instructions:</H1>
                { 
                ! user 
                ? <span>Log in to save this recipe!</span>
                : ( <AddToFavRecipe recipeInfo ={recipeInfo} user={user}/> )
                }
        </>
    )

}

export default Header

const H1 = styled.h1`
    color:black;
    font-size: 40px;
    margin: 10px 0 10px 0;
    font-weight: bold;
    text-align: center;
`;
