import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "./UserProfile";
import Login from "./Login";
import Logout from "./Logout";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Wrapper>
      <Buttons>
        {
            ! isAuthenticated 
            ? <Login /> 
            : <Logout />
        }
      </Buttons>

      <User>
        {
            isAuthenticated && (<UserProfile user={user} />)
        }
      </User>
    </Wrapper>
  );
};

export default Profile;

const User = styled.div``;

const Wrapper = styled.div`
  width: 91.35vw;
`;

const Button = styled.button``;

const Buttons = styled.div``;
