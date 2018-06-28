import React from 'react';
import SingleForecast from './SingleForecast';
import PropTypes from 'prop-types';

const Forecast = ({ list, dayTime }) => {

	return(
		<span className={dayTime < 9 ? 'night' : 'day'}>
			{
				list.map((item, idx) => {
					return <SingleForecast forecast={item} key={idx} />
				})
			}
  	</span>
	)
}

Forecast.propTypes = {
	list: PropTypes.array.isRequired,
	dayTime: PropTypes.number.isRequired
}

export default Forecast