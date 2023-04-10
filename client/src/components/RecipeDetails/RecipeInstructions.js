import styled from "styled-components"
import RecipeEquipment from "./RecipeEquipment";
import RecipeIngredients from "./RecipeIngredients";

const RecipeInstructions = ({recipeInfo}) => {
    
    let random = Math.random()

    return (
        <div>
        {recipeInfo.analyzedInstructions[0].steps.map((inst) => {

            return (
                <RecipeStep key= {recipeInfo.analyzedInstructions[0].steps.indexOf(inst) +  random}>
                    <Step>Step #{inst.number} </Step>

                    { // if ingredients exist, show
                        inst.ingredients.length > 0 
                        ? <div><RecipeIngredients inst = {inst}/></div>
                        : null
                    }
                    {   //if equipment exists, show
                        inst.equipment.length > 0 
                        ? <div><RecipeEquipment inst = {inst}/></div>
                        : null
                    }

                    {/* <span>Length: {inst.length.number} {inst.length.unit}</span> */}
                    <InstText>{inst.step}</InstText>

                </RecipeStep>
            )

        })}
    </div>
    )

}

export default RecipeInstructions

const InstText = styled.span`
    font-size: 15px;
    width: 850px;


`;

const RecipeStep = styled.div`
    display:flex ;
    flex-direction: column;
    margin: 0 0 20px 0;
    padding: 20px;
    width: 850px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 0px 5px lightgrey;
    row-gap: 10px;

    transition: 0.1s ease-in-out;

    

&:hover{
    width: 860px;
    outline: 2px solid #6e1533;
}

`;

const Step = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin: 0 0px 5px 0;
    color: #6e1533;
    width: 850px;




`;