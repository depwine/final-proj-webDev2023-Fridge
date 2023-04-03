import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "./UserProfile";
import Login from "./Login";
import Logout from "./Logout";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Wrapper>

      <User>
        {
            isAuthenticated && (<UserProfile user={user} />)
        }
      </User>

      <Buttons>
        {
            ! isAuthenticated 
            ? <Login /> 
            : <Logout />
        }
      </Buttons>

    </Wrapper>
  );
};

export default Profile;

const User = styled.div`
  margin: 20px;
`;

const Wrapper = styled.div`
  width: 91.35vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const Buttons = styled.div`
  display: flex;

`;
