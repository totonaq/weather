import React, { Component } from 'react';
import Forecast from './Forecast';
import PropTypes from 'prop-types'; 

class TextArea extends Component {
	componentDidMount() {
		this.content.focus();
	}

	render() {
		const { list } = this.props;
		
		return(
			<div
				className='textarea'
				contentEditable
				suppressContentEditableWarning="true"
				ref={node => this.content = node}>
				<Forecast list={list} />
		  	Lorem ipsum dolor sit amet
		  	
			</div>
		)
	}
}

TextArea.propTypes = {
	list: PropTypes.array.isRequired
}

export default TextArea