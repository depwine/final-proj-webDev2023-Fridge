import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "./UserProfile";
import Login from "./Login";
import Logout from "./Logout";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Wrapper>
      
      {
            isAuthenticated 
            ? 
            (
            <>
              <User>
                <UserProfile user={user} />
              </User>
                <Logout />
            </> 
            )
            : (
              <Center>
                   <Login/>
              </Center>

            )
      }

    </Wrapper>
  );
};

export default Profile;

const User = styled.div`
  margin: 20px;
`;

const Center= styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-self: center;
`;

const Wrapper = styled.div`
  position: fixed;
top: 80px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
