import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
import { Navbar } from "./Navbar";
import { Questions } from "./Questions";
import { UserAnswer } from "./Footer";

export const FlashCards = () => {
    const initialDeckStatus = {
        questionStatus: "unstarted",//unstarted, finished
        questionMarker: "",
    };
    
    const [status, setStatus] = useState(initialDeckStatus);
    
    return (
        <Screen>
            <GlobalStyle />
            <Navbar />
            <Questions questionStatus={status.questionStatus} />
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