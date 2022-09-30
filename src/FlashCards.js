import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
import { Navbar } from "./Navbar";
import { Questions } from "./Questions";
import { UserAnswer } from "./Footer";
import { questions } from "./assets.js";

export const FlashCards = () => {
    const initialDeckStatus = {
        questionStatus: "unstarted",//unstarted, finished
        questionMarker: "",
        questionAnswered: false,
        finishedQuestions: 0,
        initializedQuestions: [],
    };

    const [status, setStatus] = useState(initialDeckStatus);
    console.log(status.initializedQuestions)
    return (
        <Screen>
            <GlobalStyle />
            <Navbar />
            <Questions
                questionStatus={status.questionStatus}
                questions={questions}
                marker={status.questionMarker}
                setStatus={setStatus}
                status={status}
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