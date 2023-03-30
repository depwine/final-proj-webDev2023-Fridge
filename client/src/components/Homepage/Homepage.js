import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

  const nav = useNavigate()


  const handleFeedMe = () => {
    nav("/FeedMe")
  }

  return (

      <Wrapper>
      Hi!
      <div></div>
      <Button onClick={handleFeedMe}>FeedMe</Button>
      </Wrapper>

  );
}

export default Homepage;

const Wrapper = styled.div`
  height: 100%
`;

const Button = styled.button`
`;
