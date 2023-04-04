import styled from "styled-components"

const RecipeDetailedIngredients = ({recipeInfo}) => {

    return (
        <>
                    
                    {
                        ! recipeInfo.missedIngredients
                        ?                 
                        (   <IngDiv>      
                            {
                                recipeInfo.extendedIngredients.map((ing) => {
                                    return (
                                        <Ing key = {ing.id}>
                                            <Bold>{ing.original}</Bold>
                                            <div>{parseFloat(ing.amount.toFixed(2))} {ing.unit} {ing.nameClean}</div>
                                            <Aisle>Aisle: {ing.aisle}</Aisle>
                                        </Ing>
                                    )
                                })
                            }               

                            </IngDiv>      
                        )
                        :             
                        (           
                            
                                recipeInfo.missedIngredients.map((ing) => {
                                    return (
                                        <Ing key = {ing.id}>
                                            <Bold>{ing.original}</Bold>    
                                            <div>{ing.amount} {ing.unit} {ing.extendedName}</div>
                                            <Aisle>Aisle: {ing.aisle}</Aisle>
                                        </Ing>
                                    )
                                })
                            
                        )
                    }
     

        </>
    )

}

export default RecipeDetailedIngredients

const IngDiv = styled.div`
    width: 700px;
    display: flex;
    flex: row;
    flex-wrap: wrap;
    justify-content: space-between;

`;

const Bold = styled.span`
    font-weight: bold;
    text-align: center;
    padding: 0 0 5px 0;
`;

const Ing = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 300px;
    margin: 0 0 5px 0;
    padding: 2px;
    border: 1px solid grey;
`;

const Aisle = styled.span`
    font-style: italic;
`;
