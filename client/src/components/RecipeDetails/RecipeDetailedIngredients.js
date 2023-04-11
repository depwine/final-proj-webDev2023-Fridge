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

                                    let random = Math.random()*10000

                                    return (
                                        <Ing key = {"DetailedIngredient+"+ing.id+random}>
                                            <Bold>{ing.original}</Bold>
                                            <Aisle>Aisle: {ing.aisle}</Aisle>
                                        </Ing>
                                    )
                                })
                            }               

                            </IngDiv>      
                        )
                        :        null     

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
    width: 340px;


    
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
    transition: 0.1s ease-in-out;

    &:hover{
        width: 360px;
        outline: 2px solid #6e1533;

    }

`;

const Aisle = styled.span`
    font-style: italic;
    width: 300px;
    text-align: center;

`;
