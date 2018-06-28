import React, { Component } from 'react';
import Forecast from './Forecast';
import PropTypes from 'prop-types'; 

class TextArea extends Component {

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

    return caretOffset;

	}

	insertForecast = () => {
		const content = this.content.textContent;
		const split = this.getCaretPosition(this.content);
		const firstPart = content.slice(0, split);
		const lastPart = content.slice(split)
		const text = firstPart + this.area.innerHTML + lastPart

		this.content.innerHTML = text
	}

	render() {
		const { list } = this.props;
		
		return(
			<div className='textarea'>
				<div
					contentEditable
					suppressContentEditableWarning="true"
					onClick={this.insertForecast}
					onKeyUp={this.insertForecast}
					ref={node => this.content = node}
					>
					
			  	<span>Lorem ipsum dolor sit amet</span>
			  	
				</div>
				<div className='hiddenDiv' ref={node => this.area = node}>
					<Forecast list={list} />
				</div>
				
			</div>
		)
	}
}

TextArea.propTypes = {
	list: PropTypes.array.isRequired
}

export default TextArea