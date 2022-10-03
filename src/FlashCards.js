import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
import { Navbar } from "./Navbar";
import { Questions } from "./Questions";
import { UserAnswer } from "./Footer";
import { questions } from "./assets.js";

export const FlashCards = () => {
    const initialDeckStatus = {
        questionMarker: "",
        questionAnswered: false,
        finishedQuestions: 0,
        initializedQuestions: [],
        cardStatus: questions.map(_ => "closed"),
        activeQuestion: null,
    };
   
    const [status, setStatus] = useState(initialDeckStatus);

    return (
        <Screen>
            <GlobalStyle />
            <Navbar />
            <Questions
                questions={questions}
                cardStatus={status.cardStatus}
                marker={status.questionMarker}
                setStatus={setStatus}
                status={status}
                activeQuestion={status.activeQuestion}
            />
            <UserAnswer
                answer={status.questionAnswered}
                setStatus={setStatus}
                status={status}
                finishedQuestions={status.finishedQuestions}
                questions={questions.length}
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