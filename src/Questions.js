import styled from "styled-components";
import { useState } from "react";
import { images, questions } from "./assets.js";

const Question = ({ id, question, answer }) => {
    const [status, setStatus] = useState("closed");

    if (status === "closed") {
        return (
            <QuestionClosed>
                <p>Pergunta {id}</p>
                <img onClick={() => setStatus("flipped")} src={images.seta_play} alt="botão para abrir essa pargunta" />
            </QuestionClosed>
        );
    } else if (status === "flipped") {
        return (
            <QuestionOpen>
                <p>{question}</p>
                <img onClick={() => setStatus("answer")} src={images.seta_virar} alt="botão para" />
            </QuestionOpen>
        );
    } else if (status === "answer") {
        return (
            <QuestionOpen>
                <p>{answer}</p>
                <img onClick={() => setStatus("finished")} src={images.seta_play} alt="botão para marcar essa pargunta" />
            </QuestionOpen>
        );
    } else {
        return (
            <QuestionClosed>
                <p>Pergunta {id}</p>
                <img src={images.icone_erro} alt="botão para abrir essa pargunta" />
            </QuestionClosed>
        );
    }
};

export const Questions = () => {
    return (
        <ul>
            {questions.map(e => <Question key={e.question} id={questions.indexOf(e) + 1} question={e.question} answer={e.answer}/>)}
        </ul>
    );
};

const QuestionClosed = styled.li`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;  
    }
    img{
        width: 20px;
        height: 23px;
    }
    
`;

const QuestionOpen = styled.li`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: 30px;
        height: 20px;
    }
`;