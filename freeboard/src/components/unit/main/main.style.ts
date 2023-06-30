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
    transform: translateX(-50%);
    opacity: 0;
    transition: .8s;
`

export const SubTitle = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    transform: translateX(-50%);
    opacity: 0;
    transition: .8s;
`

export const contents = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
`

export const contentsCol = styled(contents)`
    grid-template-columns: 1fr;
    grid-template-rows: 200px 600px;
`