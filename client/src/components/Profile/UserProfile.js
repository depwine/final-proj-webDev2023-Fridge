import styled from "styled-components"

const UserProfile = ({  user  }) => {


    return (
    <Wrapper>
            <Img src = {user.picture} alt = {user.name}/>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
    </Wrapper>

)
}

export default UserProfile

const Img = styled.img`

    width: 300px;

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;