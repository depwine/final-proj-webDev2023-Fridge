import styled from "styled-components";
import { Link } from "react-router-dom";
import SidebarLogin from "./SidebarLogin";
import SidebarLogout from "./SidebarLogout";
import { useAuth0 } from "@auth0/auth0-react";


const Sidebar = () => {

    const { user, isAuthenticated } = useAuth0();

    return (

        <Div>
            <div>
            <StyledLink to={"/"}> Home </StyledLink>
            <StyledLink to={"/FeedMe"}> Feed Me</StyledLink>
            <StyledLink to={"/favrecipes"}> Fav Recipes </StyledLink>
            <StyledLink to={"/profile"}> Profile </StyledLink>
            </div>

            <Log>
                {
                    ! isAuthenticated 
                    ? <SidebarLogin /> 
                    : 
                    (
                    <SidebarFooter>
                        <Img src = {user.picture} alt = {user.name}/>
                        <SidebarLogout />
                    </SidebarFooter>

                    )
                }
            </Log>

        </Div>

    )

}

export default Sidebar

const SidebarFooter = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
`;

const Img = styled.img`
    width: 50px;
    border-radius: 50%;
`;

const Log = styled.div`
    text-align: center;
    margin: 0 0 20px 0;
`;

const Div = styled.div`
    position: fixed;
    font-size: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    width: 160px;
    height: 100%;
    background-color: #912247;

`;

const StyledLink = styled(Link)`
    display: flex;
    justify-content: right;
    padding: 10px 10px 30px 5px;
    font-size: 25px;
    text-decoration: none;
    color: white;
    background-color: #912247;
    &:hover{
        cursor: pointer;
        background-color: #6e1533;
                color: white;
    }

`;