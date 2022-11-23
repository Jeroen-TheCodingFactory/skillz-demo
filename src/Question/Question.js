import { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import "./Question.css";

const Question = (props) => {

    const [rating, setRating] = useState(0);
    const [stars, setStars] = useState([]);

    useEffect(() => {
        setRating(props.rating);
    }, []);

    useEffect(() => {
        const newStars = [];
        for (let i = 1; i <= rating; i++) {
            newStars.push(<i key={i} onClick={() => onStarClicked(i)} className="question__star fa-solid fa-star"></i>);
        }
        for (let i = rating + 1; i <= 5; i++) {
            newStars.push(<i key={i} onClick={() => onStarClicked(i)} className="question__star fa-regular fa-star"></i>);
        }
        setStars(newStars);
        props.onRate(rating, props.number);
    },[rating])

    const onStarClicked = (newRating) => {
        setRating(newRating);
    }

    let nextButtonToBeRendered = <Link className="question__button" to={props.next}> Volgende</Link>
    if (props.last === true) {
        nextButtonToBeRendered = <Link onClick={props.onLast} className="question__button" to={props.next}> Volgende</Link>
    }
   
    return (
        <article className="question">
            <header className="question__header">
                <h2 className="question__heading">#{props.number} {props.question}</h2>
            </header>
            <section className="question__section">
                <p className="question__text">(1 ster staat voor zéér slecht, 5 sterren staan voor zéér goed)</p>
                <div className="question__stars">
                   {stars}
                </div>
            </section>
            <footer className="question__footer">
                <Link className="question__button" to={props.previous}>Vorige</Link>
                {nextButtonToBeRendered}
            </footer>
        </article>
    )
}

export default Question;