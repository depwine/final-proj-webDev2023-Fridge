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
  font-size: 15px;
  background-color: #912247;;
  border-radius: 15px;
  width: 90px;
  height: 30px;
  color: white;
  margin: 50px 0 0 0;
  transition: 0.1s ease-in-out;


  &:hover{
    cursor: pointer;
				background-color: #b8607c;
				color: white;		

  }

`;
