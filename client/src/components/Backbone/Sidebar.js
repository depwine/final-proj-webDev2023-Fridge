import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate} from "react-router-dom";

const Sidebar = () => {

    const nav = useNavigate()
    const { user, isAuthenticated } = useAuth0();

    return (

        <Div>
                       
            <Logo onClick={()=> {nav("/")}}>
                <Title>FeedMe</Title>
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
                    ? null
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

const Title = styled.div`
    height: 90px;
    display: flex;
    align-items: center;
    color: white;
`;

const Logo = styled.div`
    color: white;
    display: flex;
    align-items: center;
    align-content: center;
    margin: 0 0 0 20px;
    height: 80px;
    font-size: 65px;
    
    &:hover{
        cursor: pointer;
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
    transition: 0.1s ease-in-out;


    &:hover{
        cursor: pointer;
        outline: 4px solid white;
    }
`;

const Log = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;    
    margin: 0 0 5px 0;
`;

const Div = styled.div`
    position: fixed;
    font-size: 40px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 1px solid #6e1533;
    height: auto;
    width: 100%;
    height: 80px;
    /* background-color: #ffffff; */

    background-image: linear-gradient(
  90deg,
  hsl(340deg 68% 26%) 0%,
  hsl(337deg 58% 26%) 11%,
  hsl(333deg 50% 26%) 22%,
  hsl(328deg 43% 27%) 33%,
  hsl(321deg 36% 26%) 44%,
  hsl(310deg 30% 26%) 56%,
  hsl(294deg 25% 26%) 67%,
  hsl(277deg 25% 28%) 78%,
  hsl(260deg 24% 29%) 89%,
  hsl(243deg 24% 31%) 100%
);

    box-shadow: 5px 0px 10px #6e153365;
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
    height: 20px;
    transition: 0.1s ease-in-out;


    &:hover{
        cursor: pointer;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        box-shadow: 0px 0px 20px white;
        background-color: white;
        color: #6e1533

    }

`;