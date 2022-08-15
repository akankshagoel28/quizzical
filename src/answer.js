import React from 'react';
export default function Answer(props) {
	function decodeHtmlCharCodes(str) {
		return str.replace(/(&#(\d+);)/g, function (match, capture, charCode) {
			return String.fromCharCode(charCode);
		});
	}

	// function decodeHTMLEntities(str) {
	// 	if (str && typeof str === 'string') {
	// 		// strip script/html tags
	// 		str = str.replace(/<script[^>]>([\S\s]?)<\/script>/gim, '');
	// 		str = str.replace(/<\/?\w(?:[^"'>]|"[^"]"|'[^']')*>/gim, '');
	// 	}

	// 	return str;
	// }

	return (
		<div className='questionsection' key={props.quesId}>
			<p className='question'>{decodeHtmlCharCodes(props.question)}</p>
			<div className='options'>
				{props.allAnswers.map((opt) => (
					<button
						style={{
                                 background:  opt.value!==props.answer && opt.isSelected?"#F8BCBC":opt.value===props.answer?"#94D7A2":"none",
                                 border: opt.isSelected || opt.value===props.answer
								? 'none'
								: '0.79px solid #4D5B9E'
						}}
						className='option'
					>
						{opt.value}
					</button>
				))}
			</div>
			<div className='ending'></div>
		</div>
	);
} 