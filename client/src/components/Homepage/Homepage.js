import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../Backbone/UserContext";
import { useContext } from "react";

const Homepage = () => {

  const nav = useNavigate()
  const { user } = useAuth0();
  const { setFavRecipes } = useContext(UserContext);


  // on home page, if user is logged in and bounced back to "/"
    // fetch all favourites from back-end to populate "/fav-recipes"

  useEffect(() => {

    if (user) {

          const concatUserName = `${user.given_name} ${user.family_name}`;
    
          /// get fav recipes
          fetch(
            `http://localhost:4000/api/favrecipes?userId=${user.sub}&userName=${concatUserName}`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data.data);
              console.log("setting favourites on login!");
              setFavRecipes(data.data);
            })
            .catch((err) => {
              console.log(err);
              setFavRecipes();
            });
        
    }

  }, [user])


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
  height: 100%;
  width: 91.35vw;
`;



const Button = styled.button`
`;
