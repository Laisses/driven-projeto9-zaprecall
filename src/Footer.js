import styled from "styled-components";

export const UserAnswer = ({setStatus, questions, answer, finishedQuestions}) => {
    const chooseMarker = (e) => {
        
        if (e.target.value === "no") {
            setStatus({
                questionStatus: "finished",
                questionMarker: "no",
                questionAnswered: true,
                finishedQuestions: finishedQuestions + 1,
            })
        } else if (e.target.value === "almost") {
            setStatus({
                questionStatus: "finished",
                questionMarker: "almost",
                questionAnswered: true,
                finishedQuestions: finishedQuestions + 1,
            })
        } else {
            setStatus({
                questionStatus: "finished",
                questionMarker: "zap",
                questionAnswered: true,
                finishedQuestions: finishedQuestions + 1,
            })
        }
    };
    
    return (
        <Footer>
            <div>
                <ButtonNo 
                    onClick={(e) => chooseMarker(e)} 
                    disabled={answer ? true : false}
                    value="no">
                        Não lembrei
                    </ButtonNo>
                <ButtonAlmost 
                    onClick={(e) => chooseMarker(e)} 
                    value="almost">
                        Quase não lembrei
                </ButtonAlmost>
                <ButtonZap 
                    onClick={(e) => chooseMarker(e)} 
                    value="zap">
                        Zap!
                </ButtonZap>
            </div>
            <span>{finishedQuestions}/{questions} concluídos</span>
        </Footer>
    );
};

const Footer = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
    div {
        display: flex;
        width: 80%;
        justify-content: space-between;
        margin: 20px;
    }
    button {
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;        
        padding:5px;
    }
`;

const ButtonNo = styled.button`
    background-color: #ff3030;
    border: 1px solid #ff3030;
`;

const ButtonAlmost = styled.button`
    background-color: #ff922e;
    border: 1px solid #ff922e;

`;

const ButtonZap = styled.button`
    background-color: #2fbe34;
    border: 1px solid #2fbe34;
`;