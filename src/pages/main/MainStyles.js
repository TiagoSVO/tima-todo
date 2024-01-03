import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 150px 1fr 50px;
    border: 1px solid red;
    grid-template-areas: 'header' 'main' 'footer';
`

export const Header = styled.header`
    grid-area: header;
    border: 1px solid yellow;
`

export const Main = styled.main`
    background-color: ${(props) => props.theme.colors.main};
    grid-area: main;
    border: 1px solid green;
`

export const Footer = styled.main`
    grid-area: footer;
    border: 1px solid blue;
`