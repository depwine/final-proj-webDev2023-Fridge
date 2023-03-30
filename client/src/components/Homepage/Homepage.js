import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

  const nav = useNavigate()


  const handleFeedMe = () => {
    nav("/FeedMe")
  }

  return (
    <>
      Hi!
      <div></div>
      <Button onClick={handleFeedMe}>FeedMe</Button>
    </>
  );
}

export default Homepage;

const Button = styled.button`
`;
