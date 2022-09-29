import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
import { Navbar } from "./Navbar";
import { Questions } from "./Questions";
import { UserAnswer } from "./Footer";

export const App = () => {
    return (
        <Screen>
            <GlobalStyle />
            <Navbar />
            <Questions />
            <UserAnswer />
        </Screen>
    );
};

const Screen = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`;
//exportar o setStuff para o filho, para ele ter poder de alterar o estado no pai