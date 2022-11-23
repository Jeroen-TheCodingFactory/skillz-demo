import { useState } from "react";
import {Routes, Route } from "react-router-dom";
import QuestionsRouter from "../QuestionsRouter/QuestionsRouter";
import Intro from "../Intro/Intro";
import Outro from "../Outro/Outro";
import "./App.css";

const App = () => {

    const [questionsAndAnswers, setQuestionsandAnswers] = useState([]);

    const onLast = (newQuestionsAndAnswers) => {
        setQuestionsandAnswers(newQuestionsAndAnswers);
    }

    return (
            <Routes>
                <Route path="/vragen/:number" element={<QuestionsRouter onLast={onLast} />} />
                <Route path="/outro" element={<Outro  questionsAndAnswers={questionsAndAnswers}/>} />
                <Route path="/" element={<Intro />}></Route>
            </Routes>
    );
}


export default App;