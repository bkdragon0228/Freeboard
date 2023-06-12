import styled from '@emotion/styled'

const StyledMessage = styled.p<{
    color? : string;
}>`
    color : ${({color}) => color ? color : 'black'};
    background-color: transparent;
`

export default StyledMessage