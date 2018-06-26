import React from 'react';
import SingleForecast from './SingleForecast';
import PropTypes from 'prop-types';

const Forecast = ({ list }) => {

	const currentHour = new Date().getHours()

	const divStyle = currentHour < 9 ? 
		{
			color: '#fff',
			backgroundColor: '#000'
		} :
		{
			color: '#000',
			backgroundColor: '#ffff00'
		}

	return(
		<span style={divStyle}>
			{
				list.map((item, idx) => {
					return <SingleForecast forecast={item} key={idx} />
				})
			}
  	</span>
	)
}

Forecast.propTypes = {
	list: PropTypes.array.isRequired
}

export default Forecast