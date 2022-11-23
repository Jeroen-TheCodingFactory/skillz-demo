import Question from "../Question/Question";
import questionsFromData from "../data/questions";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const QuestionsRouter = (props) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setQuestions(questionsFromData);
    }, []);

    const onRate = (rating, number) => {
        let oldState = questions;
        let newState = oldState.map(question => {
            if (question.number === number) {
                question.rating = rating;
                return question;
            }
            return question;
        });
        setQuestions(newState);
    }
    
    const numberFromURL = useParams();

    let questionSearch = questions.map(questionObject => {
        if (questionObject.number == numberFromURL.number) {
            return <Question onLast={() => props.onLast(questions)}
                last={questionObject.last}
                onRate={onRate}
                previous={questionObject.previous}
                next={questionObject.next}
                number={questionObject.number}
                key={questionObject.number}
                question={questionObject.question}
                rating={questionObject.rating} />;
        }
    });

    return (
        <>
            {questionSearch}
        </>
    )
}

export default QuestionsRouter;