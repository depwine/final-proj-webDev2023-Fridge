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
                                            <Aisle>Aisle: {ing.aisle}</Aisle>
                                        </Ing>
                                    )
                                })
                            }               

                            </IngDiv>      
                        )
                        :        null     
                        // (           
                            
                        //         recipeInfo.missedIngredients.map((ing) => {
                        //             return (
                        //                 <Ing key = {ing.id}>
                        //                     <Bold>{ing.original}</Bold>    
                        //                     <Aisle>Aisle: {ing.aisle}</Aisle>
                        //                 </Ing>
                        //             )
                        //         })
                            
                        // )
                    }
     

        </>
    )

}

export default RecipeDetailedIngredients

const IngDiv = styled.div`
    width: 770px;
    display: flex;
    flex: row;
    flex-wrap: wrap;
    justify-content: space-between;

`;

const Bold = styled.span`
    font-weight: bold;
    color: #6e1533;
    text-align: center;
    padding: 0 0 5px 0;
    
`;

const Ing = styled.div`
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 350px;
    margin: 0 0 5px 0;
    padding: 2px;
    background-color: white;
    box-shadow: 0px 0px 5px lightgrey;
    row-gap: 5px;
    padding: 5px;

`;

const Aisle = styled.span`
    font-style: italic;
`;
