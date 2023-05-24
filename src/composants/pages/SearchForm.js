import React, { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import axios from 'axios'
import WeatherDisplay from '../layout/WeatherDisplay'
import ErreurRequete from './ErreurRequete'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchForm = () => {

    console.log("0")
    const [data, setData] = useState([])
    const { ville = '' } = useParams()

    useEffect(() => {
        fetchData();
    }, [ville]);


    console.log("1")

    const fetchData = async () => {
        try {
            var url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&lang=fr&appid=45aced123b10e9fff410b71fe3fcffa4&units=metric`
            console.log("URL : " + url)
            const response = await axios.get(url)
            setData(response.data)

        } catch (error) {
            toast.error(`Une erreur s'est pfhdsgusroduite : ${error.message}`);
        }
    }

    console.log("2")
    return (
        <div>
            <div className='d-flex justify-content-center mt-4'>
                <div key={data.id}>
                    <ToastContainer />
                    {data.main && (
                        <>
                            <WeatherDisplay data={data} /> { }
                        </>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchForm