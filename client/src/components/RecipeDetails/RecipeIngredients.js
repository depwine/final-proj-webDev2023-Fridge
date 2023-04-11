import styled from "styled-components"

const RecipeIngredients = ({inst}) => {


    return (
        <Wrapper>
            <Title>Ingredients:</Title>
            <Div>
                {
                    inst.ingredients.map((ing) => {

                        let random = Math.random()*10000

                        return (
                            
                            <RecIn key = {1000+ing.id+ing.localizedName+random}>{ing.name},</RecIn>
                            
                        )
                    })
                }
            </Div>
        </Wrapper>
    )
 
}

export default RecipeIngredients

const RecIn = styled.span``;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

`;

const Div = styled.div`

    display: flex;
    column-gap: 5px;
    margin: 0px 0 0 10px;
    flex-wrap: wrap;

`;

const Title = styled.span`
    font-weight: bold;
`;