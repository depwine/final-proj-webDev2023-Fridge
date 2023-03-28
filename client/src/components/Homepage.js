import Search from "./Search";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import styled from "styled-components";

function Homepage() {

  // oneIngredient, setOneIngredient
  const { oneIngredient } = useContext(UserContext);

  return (
    <>
            <Search/>
          {
                        
                        ! oneIngredient
                        ? <Div>Pick an ingredient ... </Div>
                        : <Div>{oneIngredient.name}</Div>
            
          }
    </>

  );
}

export default Homepage;

const Div = styled.div`

  font-size : 40px;
  margin: 50px;
`;

