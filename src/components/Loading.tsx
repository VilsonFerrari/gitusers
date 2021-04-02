import styled from "styled-components"

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
`

export const Loading = () => (
    <StyledDiv>
        <p>Loading...</p>
    </StyledDiv>
)