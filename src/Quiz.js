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

    function setOptions(id){
    let a=[]; let k=0;
    const n=Math.floor(Math.random()*4);
    for(let i=0;i<4;i++){
      if(i===n)
      {
        a[i]={value:questions[id].correct_answer,isSelected:false};
        continue;
      }
      a[i]={value:questions[id].incorrect_answers[k],isSelected:false};
      k++;
    }
    return a
}
    const [question,setQuestion]=React.useState(setAllQuestions())
    function setAllQuestions(){
        const quest=[]
        for(let i=0;i<4;i++){
           quest.push({
            question:questions[i].question,
            options:setOptions(i),
            answer:questions[i].correct_answer
           })
        }
        return quest
    }
    function change(val){
        setQuestion(questions.map((question)=>{
           question.options.map(opt=>{
            return opt.value===val?{...opt,isSelected:!opt.isSelected}:opt;
           })
        }))
      }
    console.log(questions)
    return (<div className="outerquiz">
        <div className="quiz">
        {
            loading ? 
            <div className="loading">Loading questions...</div>
            : question.map((e,i) => <Question quest={e.question} change={()=>change(e.options.value)} answer={e.answer} allAnswers={e.options} />)
        }
        </div>
        <button className="check">Check answers</button>
    </div>)
}