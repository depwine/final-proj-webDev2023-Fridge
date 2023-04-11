import styled from "styled-components"
import Recipe from "./Recipe"

const RecipeEquipment = ({inst}) => {


    return (
        <Wrapper>
        <Title>Equipment:</Title>
        <Div>
            {
                inst.equipment.map((ing) => {
                    
                    let random = Math.random()*10000

                    return (
                        
                        <RecEp key = {ing.id+ing.localizedName+random+random}>{ing.name}</RecEp>
                        
                    )
                })
            }
        </Div>
        </Wrapper>
    )
 
}

export default RecipeEquipment

const RecEp = styled.span``;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;

`;

const Div = styled.span`
    display: flex;
    column-gap: 5px;
    margin: 0px 0 0 10px;
`;

const Title = styled.span`
    font-weight: bold;
`;