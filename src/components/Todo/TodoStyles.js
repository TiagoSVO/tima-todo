import styled from "styled-components";

export const TodoContainer = styled.div`
    font-family: Montserrat, sans-serif;
    color: ${(props) => props.theme.colors.text};
    position: relative;
    display: grid;
    height: 70vh;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr 50px;
    grid-template-areas: 'header' 'content' 'footer';
    margin: 20px auto;
    background: linear-gradient(180deg, #FFFFFF, ${(props) => props.theme.colors.background});
    border-radius: 5px;
    max-width: 600px;
    width: 50%;
    min-width: 300px;
    box-shadow: 0 0 10px #FFFFFF;
`

export const TodoContainerHeader = styled.div`
    grid-area: header;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.colors.default};
    padding: 0 10px;
    font-style: italic;

    h3 {
        font-size: 2em;
        font-weight: 500;
    }
`

export const TodoContainerContent = styled.div`
    grid-area: content;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const TodoContainerFooter = styled.div`
    grid-area: footer;
`