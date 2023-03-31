import styled from "styled-components";
import { Link } from "react-router-dom";

const Sidebar = () => {

    return (

        <Div>
            <StyledLink to={"/"}> Home </StyledLink>
            <StyledLink to={"/FeedMe"}> Feed Me</StyledLink>
            <StyledLink> Fav Recipes </StyledLink>
            <StyledLink> Profile </StyledLink>
        </Div>

    )

}

export default Sidebar

const Div = styled.div`
    font-size: 45px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: auto;
    width: 200px;
    height: 100%;
    background-color: #8a8a8a;

`;

const StyledLink = styled(Link)`
    display: flex;
    justify-content: end;
    padding: 10px 10px 30px 0;
    font-size: 30px;
    text-decoration: none;
    color: black;

    &:hover{
        cursor: pointer;
        background-color: white;
        color: black;
    }

`;