import React from "react";
import { Container, Header, Main, Footer, Hero, Nav, Content, HeroInner } from './MainStyles'
import Todo from "../../components/Todo/Todo";

function MainPage() {
    return(
        <Container>
            <Header>
                <Nav>
                    
                </Nav>
                <Hero>
                    <HeroInner>
                        <Content><h1>To Do</h1></Content>
                    </HeroInner>
                </Hero>
            </Header>
            <Main>
                <Todo />
            </Main>
            <Footer></Footer>
        </Container>
    )
}

export default MainPage;