import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 150px 1fr 50px;
    grid-template-areas: 'header' 'main' 'footer';
    background: ${(props) => props.theme.colors.black};
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
    grid-template-rows: 40px auto;
`

export const Nav = styled.nav`
    position: relative;
    background: linear-gradient(120deg, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.main});
    border-bottom: 1px solid ${(props) => props.theme.colors.darkSecondary};
    &:after {
        content: " ";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, #ffffff66 3%, #ffffff00 30%);
    }
`


export const Hero = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 20px auto;
    background: linear-gradient(120deg, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.main});
    border-radius: 5px;
    width: 50%;
    padding: 1px;
`

export const HeroInner = styled.div`
    background-color: ${(props) => props.theme.colors.black};
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
`

export const Main = styled.main`
    grid-area: main;
    
`

export const Footer = styled.main`
    grid-area: footer;
    border-top: 1px solid ${(props) => props.theme.colors.darkMain};
    background: linear-gradient(${(props) => props.theme.colors.main}, ${(props) => props.theme.colors.darkMain});
`