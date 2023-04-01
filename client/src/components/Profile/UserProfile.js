import styled from "styled-components"

const UserProfile = ({ user }) => {

    return (
    <>

        {
        //  JSON.stringify(user, null, 2) 
        }
        <Img src = {user.picture} alt = {user.name}/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>

    </>
    )
}

export default UserProfile

const Img = styled.img`

    width: 300px;

`;