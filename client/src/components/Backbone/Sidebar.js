import styled from "styled-components";
import { Link } from "react-router-dom";
import SidebarLogin from "./SidebarLogin";
import SidebarLogout from "./SidebarLogout";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate} from "react-router-dom";



const Sidebar = () => {

    const nav = useNavigate()


    const { user, isAuthenticated } = useAuth0();

    return (

        <Div>
                       
            <Logo onClick={()=> {nav("/")}}>
                <span>FeedMe</span>
            </Logo>
            <ButtonDiv>
                <StyledLink to={"/"}> HOME </StyledLink>
                <StyledLink to={"/FeedMe"}> SEARCH </StyledLink>
                <StyledLink to={"/favrecipes"}> SAVED RECIPES </StyledLink>
                <StyledLink to={"/profile"}> PROFILE </StyledLink>
            </ButtonDiv>

            <Log>
                {
                    ! isAuthenticated 
                    ? <SidebarLogin /> 
                    : 
                    (
                    <SidebarFooter>
                        <Img src = {user.picture} onClick={()=> {nav("/profile")}}/>
                    </SidebarFooter>

                    )
                }
            </Log>

        </Div>

    )

}

export default Sidebar

const Logo = styled.div`
    color: white;
    display: flex;
    align-items: flex-end;
    margin: 0 0 0 20px;
    height: 80px;
    font-size: 65px;
    
    &:hover{
        cursor: pointer;
         color: #d1d1d1;
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    align-content: flex-end;
    column-gap: 80px;
    flex-direction: row;
`;

const SidebarFooter = styled.span`
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    row-gap: 5px;
    margin: 0 10px 0 0;
`;

const Img = styled.img`
    width: 50px;
    border-radius: 50%;
    margin: 0 0 5px 0;

    &:hover{
        cursor: pointer;
        outline: 4px solid white;
    }
`;

const Log = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    margin: 0 0 20px 0;
`;

const Div = styled.div`
    position: fixed;
    font-size: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    width: 100%;
    height: 80px;
    background-color: #6e1533;
    box-shadow: 5px 0px 10px grey;
    padding: 0 10px 0 0;

`;

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: row;
    align-content: flex-end;
    align-items: flex-end;
    padding: 10px 10px 0px 5px;
    font-size: 25px;
    text-decoration: none;
    color: white;

    &:hover{
        cursor: pointer;
         color: #d1d1d1
    }

`;