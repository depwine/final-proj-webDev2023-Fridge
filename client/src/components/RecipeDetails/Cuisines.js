import styled from "styled-components"

const Cuisines = ({recipeInfo}) => {

    let random = Math.random()

    return (
        <>
            {
                ! recipeInfo.cuisines 
                ? null
                : 
                (
                    <CuisineDiv> 

                        {recipeInfo.cuisines.map((cuisine) => {

                        return (
                            <span key = {cuisine + random}>
                            {`${cuisine}`}
                            </span>)

                        })} 

                        ({recipeInfo.dishTypes.map((dish) => {
                            return (
                                <span key = {dish + random}>
                                {`${dish}`}
                                </span>
                                 )
                        })})
                    </CuisineDiv>
                )    
            }
        </>
    )

}

export default Cuisines


const CuisineDiv = styled.span`
    display: flex;
    flex-direction: row;
    column-gap: 5px;
    font-size: 19px;
    margin: 0 0 20px 0;
`;
