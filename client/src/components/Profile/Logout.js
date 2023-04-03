import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Logout = () => {

    const {  logout } = useAuth0();


  return (
    <>
      <Button
        onClick={() => {
          logout();
        }}
      >
        Log out
      </Button>
    </>
  );
};

export default Logout;

const Button = styled.button`
  border: none;
  color: black;
  background-color: white;
  font-size: 15px;
  margin: 50px 0 0 0;

  &:hover{
    cursor: pointer;
    color: black;
    text-decoration: underline;

  }

`;
