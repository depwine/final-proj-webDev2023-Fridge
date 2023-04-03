import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Login = () => {
  
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

export default Login;

const Button = styled.button`
  font-size: 15px;
  border: none;
  color: black;
  background-color: white;
  font-size: 50px;

  &:hover{
    cursor: pointer;
    color: black;
    text-decoration: underline;

  }

`;
