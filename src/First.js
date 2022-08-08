import React from "react";
import { useNavigate} from 'react-router-dom'
export default function First(){
    const navigate = useNavigate();
    return(
        <div className="first">
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <button className="start" onClick={()=>navigate('/quiz')}>Start Quiz</button></div>
    )
}