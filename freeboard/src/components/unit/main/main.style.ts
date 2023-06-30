import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Section = styled.div<{
    bgcolor? : string;
    color? : string;
}>`
    width: 100%;
    height: 760px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.bgcolor ? props.bgcolor : 'white'};
    color : ${(props) => props.color ? props.color : 'black'};
`

export const SectionTitle = styled.div<{
    width? : number;
}>`
    width: ${(props) => props.width ? `${props.width}px` : 'auto'};
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

export const contents = styled.div`
    width: 800px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
`