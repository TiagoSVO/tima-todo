import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 75px 1fr 50px;
    grid-template-areas: 'header' 'main' 'footer';
    background: linear-gradient(120deg, ${(props) => props.theme.colors.main}, ${(props) => props.theme.colors.darkMain});
    color: #fff;
`

export const Content = styled.div`
    margin: 0 auto;
    max-width: ${(props) => props.theme.sizes.laptopLarge};
`

export const Header = styled.header`
    grid-area: header;
    display: grid;
    grid-template-columns: 1fr;
`

export const Nav = styled.nav`
    position: relative;
    background: ${(props) => props.theme.colors.background};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.main};
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 0 0 5px ${(props) => props.theme.colors.main};

    h1 {
        font-family: 'FugazOne';
        font-size: 2.5em;
    }
`

export const Main = styled.main`
    grid-area: main;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Footer = styled.main`
    grid-area: footer;
    border-top: 1px solid ${(props) => props.theme.colors.background};
`