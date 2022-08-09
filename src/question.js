import React from 'react';

export default function Question(props) {
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
              background: props.green?"#94D7A2":"none",
              background: props.red && opt.isSelected?"#F8BCBC":"none",
							background: opt.isSelected
								? '#D6DBF5'
								: 'none',
							border: opt.isSelected
								? 'none'
								: '0.79px solid #4D5B9E',
						}}
						onClick={() =>
							props.onOptionChange(props.quesId, opt.value)
						}
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