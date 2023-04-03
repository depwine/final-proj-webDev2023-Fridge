import styled from "styled-components"

const RecipeIngredients = ({inst}) => {

    console.log(inst.ingredients)

    return (
        <Wrapper>
            <Title>Ingredients:</Title>
            <Div>
                {
                    inst.ingredients.map((ing) => {
                        return (
                            <>
                            <span>{ing.name}</span>
                            </>
                        )
                    })
                }
            </Div>
        </Wrapper>
    )
 
}

export default RecipeIngredients

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;

`;

const Div = styled.div`
    display: flex;
    column-gap: 5px;
    margin: 0px 0 0 10px;
`;

const Title = styled.span`
    font-weight: bold;
`;