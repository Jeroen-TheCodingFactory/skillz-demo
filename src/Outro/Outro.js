import { Bar } from 'react-chartjs-2';
import "./Outro.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const Outro = (props) => {
    let questions = [];
    let ratings = [];
    props.questionsAndAnswers.map(question => {
        questions.push("Vraag #" + question.number);
        ratings.push(question.rating);
    });

    let data = {
        labels: questions,
        datasets: [{
            label: 'Mijn score',
            data: ratings,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
        },
        ],

    };
    return (
        <article className="outro">
            <Bar data={data}></Bar>
        </article>
    );
}

export default Outro;

//1 start/intro maken 
//2. responsive maken
//3.eigen vragenlijst invullen