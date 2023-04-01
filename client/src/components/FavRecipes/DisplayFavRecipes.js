import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../Backbone/UserContext";

const DisplayFavRecipes = () => {

    const { favRecipes } = useContext(UserContext);

    return (<>

        {
            favRecipes.map((recipe) => {
                return (
                    <>
                        <span key = {recipe.id}>
                            {recipe.name}
                        </span>
                    </>
                )
            })
        }
        
    </>)


}

export default DisplayFavRecipes