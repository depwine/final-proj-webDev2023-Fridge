import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import AddToFavRecipe from "../FeedMe/AddToFavRecipe";


const Header = ({recipeInfo}) => {

    const { user } = useAuth0();   


    return (
        <>

                    <Wrapper>
                        <H1>Instructions:</H1> 
                    </Wrapper>

        </>
    )

}

export default Header

const H1 = styled.h1`
    color: #3E3C61;
    font-size: 30px;
    margin: 10px 0 10px 0;
    font-weight: bold;
    text-align: center;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 900px;
`;