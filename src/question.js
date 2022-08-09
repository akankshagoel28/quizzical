import React from 'react';
export default function Question(props){
            

    
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

      const styles={background: props.options.isSelected?"#D6DBF5":"none",
      border: props.options.isSelected?"none":"0.79px solid #4D5B9E"
    };
    return(<div className="questionsection">
         <p  className="question">{decodeHtmlCharCodes(props.question)}</p>
        <div className="options">{props.allAnswers.map(opt=><button style={styles} onClick={props.change} className="option">{opt.value}</button>)}</div>
        <div className="ending"></div>
    </div>)

}