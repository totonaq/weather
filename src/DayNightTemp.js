import React from 'react';
import PropTypes from 'prop-types'; 

const DayNightTemp = props => {

	const { minNight, maxNight, minDay, maxDay } = props

	return(
		<div className="temp">
			<p>Минимум ночи: {minNight}℃</p>
			<p>Максимум ночи: {maxNight}℃</p>
			<p>Минимум дня: {minDay}℃</p>
			<p>Максимум дня: {maxDay}℃</p>
		</div>
	)
}

DayNightTemp.propTypes = {
	minNight: PropTypes.number.isRequired,
	maxNight: PropTypes.number.isRequired,
	minDay: PropTypes.number.isRequired,
	maxDay: PropTypes.number.isRequired,
}

export default DayNightTemp