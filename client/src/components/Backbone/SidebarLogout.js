import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const SidebarLogout = () => {

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

export default SidebarLogout;

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

