import React from 'react';
import Question from './question';
import { useNavigate} from 'react-router-dom';
import Answer from './answer';

export default function Quiz() {
    const [question, setQuestion] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [score, setScore]=React.useState(0);
    const [again,setAgain]=React.useState(false);
    const [green,setGreen]=React.useState(false);
    const [red,setRed]=React.useState(false);
	function setOptions(question) {
		let a = [];
		let k = 0;
		const n = Math.floor(Math.random() * 4);
		for (let i = 0; i < question.incorrect_answers.length+1; i++) {
			if (i === n) {
				a[i] = {
					value: question.correct_answer,
					isSelected: false,
				};
				continue;
			}
			a[i] = {
				value: question.incorrect_answers[k],
				isSelected: false,
			};
			k++;
		}
		return a;
	}

	function setAllQuestions(questions) {
		const quest = questions.map((e) => {
			return {
				question: e.question,
				options: setOptions(e),
				answer: e.correct_answer,
			};
		});
		console.log('Questions: ', quest);
		return quest;
	}

	React.useEffect(function () {
		fetch('https://opentdb.com/api.php?amount=5&type=multiple')
			.then((res) => res.json())
			.then((data) => {
				setQuestion(setAllQuestions(data.results));
				setLoading(false);
			});
	}, []);
    let scores=0;
    const navigate=useNavigate();
    function check(){
        const newQues=[...question];
        for(let i=0;i<5;i++){
            newQues[i].options.map((e) => {
                if (e.isSelected && e.value === newQues[i].answer) 
                scores=scores+1;
                if(e.isSelected && e.value !== newQues[i].answer)
                setRed(true);
                if(e.value === newQues[i].answer)
                setGreen(true);}
        )
    }
    setAgain(true)
    setScore(scores)
    }

	function onOptionChange(quesId, val) {
		const newQues = [...question];
		newQues[quesId].options = newQues[quesId].options.map((e) => {
			if (e.value === val) {
				e.isSelected = true;
			} else {
				e.isSelected = false;
			}
			return e;
		});
		setQuestion(newQues);
	}

	return (
		<div className='outerquiz'>
			<div className='quiz'>
				{loading && question ? (
					<div className='loading'>Loading questions...</div>
				) : !again? 
					question.map((e, i) => (
						<Question
							question={e.question}
							onOptionChange={onOptionChange}
							answer={e.answer}
							allAnswers={e.options}
							quesId={i}
						/>
					))
				:question.map((e, i) => (
                    <Answer
                            red={red}
                            green={green}
							question={e.question}
							answer={e.answer}
							allAnswers={e.options}
							quesId={i}
						/>
                ))}
			</div>
			<div className="end"><p>{again?"You scored "+score+"/5 correct answers":""}</p><button className='check' onClick={again?()=>navigate('/'):()=>check()}>{again?"Play again":"Check answers"}</button></div>
		</div>
	);
}
