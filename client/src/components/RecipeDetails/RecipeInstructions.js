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
                    <span>{inst.step}</span>

                </RecipeStep>
            )

        })}
    </div>
    )

}

export default RecipeInstructions

const RecipeStep = styled.div`
    display:flex ;
    flex-direction: column;
    margin: 0 0 20px 0;
    padding: 20px;
    width: 850px;
    background-color: #fff2f6;
    border-radius: 15px;
    box-shadow: 2px 2px 5px lightpink;
    row-gap: 10px;

`;

const Step = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin: 0 0px 5px 0;
`;