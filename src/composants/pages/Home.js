import React from 'react'
import WeatherDisplay from '../layout/WeatherDisplay'
import data from '../data/data'

const Home = () => {
	return (
		<WeatherDisplay data={data} />
	)
}

export default Home
