import React, { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import axios from 'axios'
import WeatherDisplay from '../layout/WeatherDisplay'
import ErreurRequete from './ErreurRequete'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SearchForm = () => {
	const [data, setData] = useState([])
	const { ville = '' } = useParams()
    const lang = localStorage.getItem('degree');

	if (ville !== '') {
		useEffect(() => {
			fetchData()
		}, [ville])

		const fetchData = async () => {
			try {
				var url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&lang=fr&appid=45aced123b10e9fff410b71fe3fcffa4&units=${lang == "true" ? 'imperial' : 'metric'}`
				const response = await axios.get(url)
				setData(response.data)
			} catch (error) {
				toast.error(`Une erreur s'est produite : ${error.message}`)
			}
		}
	}

    console.log('Test');
    console.log(data);
    console.log("");
	return (
		<div className='d-flex justify-content-center'>
			<ToastContainer />
            <p>Test</p>
			{data.main && (
				<>
					<WeatherDisplay data={data} />
				</>
			)}
		</div>
	)
}

export default SearchForm
