import styled from "styled-components"
import Recipe from "./Recipe"

const RecipeEquipment = ({inst}) => {

    return (
        <Wrapper>
        <Title>Equipment:</Title>
        <Div>
            {
                inst.equipment.map((ing) => {
                    return (
                        <>
                        <span key = {ing.id+1000}>{ing.name}</span>
                        </>
                    )
                })
            }
        </Div>
        </Wrapper>
    )
 
}

export default RecipeEquipment

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