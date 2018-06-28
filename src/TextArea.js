import React, { Component } from 'react';
import Forecast from './Forecast';
import PropTypes from 'prop-types'; 

class TextArea extends Component {

	constructor(props) {
		super(props)
		this.state = {
			caretOffset: 0
		}
	}

 	getCaretPosition = element => {

		const ie = (typeof document.selection !== "undefined" && 
			document.selection.type !== "Control") && true;

		const w3 = (typeof window.getSelection !== "undefined") && true;

    let caretOffset = 0;

    if (w3) {

        const range = window.getSelection().getRangeAt(0);
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(element);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        caretOffset = preCaretRange.toString().length;

    } else if (ie) {

        const textRange = document.selection.createRange();
        const preCaretTextRange = document.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;

    }

    this.setState({caretOffset})

	}

	getCursorPosition = () => {
		this.getCaretPosition(this.content)
	}

	insertForecast = e => {

		const { caretOffset } = this.state;
		const { dayTime } = this.props;

		const text = this.content.textContent;
		const firstPart = text.slice(0, caretOffset);
		const lastPart = text.slice(caretOffset);

		const dayTimeClass = dayTime < 9 ? 'night' : 'day';

		const insert = `${firstPart}<span class=${dayTimeClass}>
			${e.target.parentNode.textContent}</span>${lastPart}`;

		this.content.innerHTML = insert;

	}

	render() {
		const { list, dayTime } = this.props;
	
		return(
			<div className='textarea'>
				<div
					contentEditable
					suppressContentEditableWarning="true"
					onClick={this.getCursorPosition}
					onKeyUp={this.getCursorPosition}
					ref={node => this.content = node}
					>
					
			  	<span>Lorem ipsum dolor sit amet</span>
			  	
				</div>
				
				<div onClick={this.insertForecast} className='forecast'>
					<Forecast list={list} dayTime={dayTime} />
				</div>
				
			</div>
		)
	}
}

TextArea.propTypes = {
	list: PropTypes.array.isRequired,
	dayTime: PropTypes.number.isRequired
}

export default TextArea