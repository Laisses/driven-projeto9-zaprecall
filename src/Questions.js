import { useState } from "react";
import styled from "styled-components";
import { images } from "./assets.js";

const Question = ({ id, questionText, answer, marker, status, setStatus, question, cardStatus, setCardStatus, enabled }) => {

    if (cardStatus === "closed") {
        return (
            <QuestionClosed>
                <p>Pergunta {id}</p>
                <img
                    onClick={() => {
                        if (enabled) {
                            setStatus({
                                ...status,
                                initializedQuestions: [...status.initializedQuestions, question]
                            })
                            setCardStatus("flipped")
                        }
                    }}
                    src={images.seta_play} alt="botão para ver pargunta" />
            </QuestionClosed>
        );
    } else if (cardStatus === "flipped") {
        return (
            <QuestionOpen>
                <p>{questionText}</p>
                <img onClick={() => setCardStatus("answered")} src={images.seta_virar} alt="botão para ver a resposta" />
            </QuestionOpen>
        );
    } else if (cardStatus === "answered") {
        return (
            <QuestionOpen>
                <p>{answer}</p>
            </QuestionOpen>
        );
    } else {
        if (marker === "no") {
            return (
                <QuestionAnswered>
                    <p>Pergunta {id}</p>
                    <img src={images.icone_erro} alt="ícone de não lembrei" />
                </QuestionAnswered>
            );
        } else if (marker === "almost") {
            return (
                <QuestionAnswered>
                    <p>Pergunta {id}</p>
                    <img src={images.icone_quase} alt="ícone de quase lembrei" />
                </QuestionAnswered>
            );
        } else {
            return (
                <QuestionAnswered>
                    <p>Pergunta {id}</p>
                    <img src={images.icone_certo} alt="ícone de acerto" />
                </QuestionAnswered>
            );
        }
    }
};

export const Questions = ({ questions, marker, status, setStatus, cardStatus, activeQuestion }) => {

    return (
        <ul>
            {questions.map((e, index) => <Question
                key={e.question}
                id={index + 1}
                questionText={e.question}
                question={e}
                answer={e.answer}
                marker={marker}
                status={status}
                setStatus={setStatus}
                cardStatus={cardStatus[index]}
                setCardStatus={newCardStatus => {
                    setStatus({
                        ...status,
                        cardStatus: cardStatus.map((e, eIndex) => eIndex === index ? newCardStatus : e),
                        activeQuestion: index,
                    })
                }}
                enabled={activeQuestion === null || activeQuestion === index}
            />)}
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

const QuestionAnswered = styled.li`
    width: 300px;
    height: 65px;
    text-decoration: line-through;
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
        width: 23px;
        height: 23px;
    } 
`;