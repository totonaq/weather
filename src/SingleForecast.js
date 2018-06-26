import React from 'react';
import PropTypes from 'prop-types';

const SingleForecast = ({ forecast }) => {
	
	return(
		<span>
      <span>Дата и время: {forecast.dt_txt}, </span>
      <span>темпертура: {forecast.main.temp}℃, </span>
      <span>давление: {forecast.main.pressure} гПа, </span>
      <span>{forecast.weather[0].description}</span><br/>
    </span>
	)
}

SingleForecast.propTypes = {
	forecast: PropTypes.object.isRequired
}

export default SingleForecast;