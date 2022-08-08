import React from 'react';
import Question from './question'
export default function Quiz() {
    const [questions, setQuestions] = React.useState([]);
    const [loading, setLoading] = React.useState(true);


    React.useEffect(function () {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                return setQuestions(data.results)
            })
    }, [])
    console.log(questions)
    return (<div className="outerquiz">
        <div className="quiz">
        {
            loading ? 
            <div className="loading">Loading questions...</div>
            : questions.map((e,i) => <Question number={i} question={questions[i].question} answer={questions[i].correct_answer} inanswers={questions[i].incorrect_answers} />)
        }
        </div>
        <button className="check">Check answers</button>
    </div>)
}