import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
import { Navbar } from "./Navbar";
import { Questions } from "./Questions";
import { UserAnswer } from "./Footer";
import { questions } from "./assets.js";

const currentQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 4)

export const FlashCards = () => {
    const initialDeckStatus = {
        finishedQuestions: 0,
        cardStatus: currentQuestions.map(_ => "closed"),
        activeQuestion: null,
    };
   
    const [status, setStatus] = useState(initialDeckStatus);

    return (
        <Screen>
            <GlobalStyle />
            <Navbar />
            <Questions
                questions={currentQuestions}
                cardStatus={status.cardStatus}
                setStatus={setStatus}
                status={status}
                activeQuestion={status.activeQuestion}
            />
            <UserAnswer
                setStatus={setStatus}
                status={status}
                finishedQuestions={status.finishedQuestions}
                questions={currentQuestions.length}
            />
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