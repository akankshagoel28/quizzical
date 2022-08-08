import React from 'react';
export default function Question(props){
            
    let a=[]; let k=0;
    const n=Math.floor(Math.random()*4);
    for(let i=0;i<4;i++){
      if(i===n)
      {
        a[i]=props.answer;
        continue;
      }
      a[i]=props.inanswers[k];
      k++;
    }
    
    function decodeHtmlCharCodes(str) { 
        return str.replace(/(&#(\d+);)/g, function(match, capture, charCode) {
          return String.fromCharCode(charCode);
        });}
    // function decodeHTMLEntities (str) {
    //     if(str && typeof str === 'string') {
    //       // strip script/html tags
    //       str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
    //       str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
    //     }
    
    //     return str;
    //   }
    const [option,setOption]=React.useState({})
      for(let i=0;i<4;i++){
      setOption({value:a[i],
        correct:a[i]===props.answer?true:false,
        select:false,
        number:i,
        questionNo:props.number})}
      const styles={background: option.select?"#D6DBF5":"none",
      border: option.select?"none":"0.79px solid #4D5B9E"
    };
    function change(id){
      setOption((oldOption) =>
			oldOption.map((opt) => {
				return opt.number === id ? { ...opt, select: !opt.select } : opt;}))
    }
    return(<div className="questionsection">
         <p  className="question">{decodeHtmlCharCodes(props.question)}</p>
        <div className="options">{option.map(value=><button style={styles} onClick={change(option.number)} className="option">{option.value}</button>)}</div>
        <div className="ending"></div>
    </div>)

}