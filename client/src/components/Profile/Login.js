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

  border: none;
  color: black;
  font-size: 50px;
  background-color: #912247;;
  border-radius: 15px;
  width: 200px;
  height: 70px;
  color: white;

  &:hover{
    cursor: pointer;
				background-color: #b8607c;
				color: white;		

  }

`;

