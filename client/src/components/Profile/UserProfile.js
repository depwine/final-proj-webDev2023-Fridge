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
    border-radius: 50%;
    width: 200px;
    border: 2px solid #6e1533;
    box-shadow: 0px 0px 20px #6e15336c;

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;