import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "./UserProfile";
import Login from "./Login";
import Logout from "./Logout";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log(user)

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
  margin: -100px 0 0 0;
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

  background-image: linear-gradient(
  180deg,
  hsl(0deg 0% 100%) 0%,
  hsl(0deg 0% 98%) 17%,
  hsl(0deg 0% 96%) 33%,
  hsl(0deg 0% 94%) 50%,
  hsl(0deg 0% 92%) 67%,
  hsl(0deg 0% 90%) 83%,
  hsl(0deg 0% 89%) 100%
);
`;
