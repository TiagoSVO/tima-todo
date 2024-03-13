import React from "react";
import { Container, Header, Main, Footer, Nav } from './MainStyles'
import Todo from "../../components/Todo/Todo";

function MainPage() {
    return(
        <Container>
            <Header>
                <Nav>
                    <h1>TiMa - ToDo</h1>
                </Nav>
            </Header>
            <Main>
                <Todo />
            </Main>
            <Footer></Footer>
        </Container>
    )
}

export default MainPage;