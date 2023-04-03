import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const SidebarLogin = () => {
  
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Button
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Log in
      </Button>
    </>
  );
};

export default SidebarLogin;

const Button = styled.button`
  border: none;
  background-color: #912247;
  color: white;
  font-size: 15px;

  &:hover{
    cursor: pointer;
    color: white;
    text-decoration: underline;

  }

`;
