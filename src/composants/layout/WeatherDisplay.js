import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { MyAppContext } from '../../context';

export default function WeatherDisplay({ data }) {
	const [inputValue, setInputValue] = useState('');
	const navigate = useNavigate();
    const { degree, setDegree } = useContext(MyAppContext);

	const handleSearch = () => {
		if (inputValue) {
			navigate(`/${inputValue}`)
		}
	}

	const InputSearch = () => {
		const handleKeyDown = (event) => {
			if (event.key === 'Enter') {
				handleSearch()
			}
		}

		return <input className='input-meteo' placeholder='Rechercher une localisation' type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
	}

    const handleCheckboxChange = (e) => {
        setDegree(e.target.checked);
        window.location.reload();
    };

	return (
		<div className='container d-flex justify-content-center'>
			<div className='container-meteo'>
				<header className='header-meteo'>
					<h1 className='h1-meteo'>Météo</h1>
				</header>
				<div className='content-meteo'>
					{InputSearch()}
					<button className='btn-meteo' onClick={handleSearch}>
						<i className='fa-solid fa-magnifying-glass fa-xl icon-search'></i>
					</button>
				</div>

				{data.main ? (
					<div className='container desc-meteo p-4 mt-4'>
						<div className='d-flex justify-content-between ms-3'>
							<span>Météo actuelle</span>
                            <div className='button r' id='button-3'>
                                <input id="degree" type='checkbox' className='checkbox' defaultChecked={degree} onChange={(e) => handleCheckboxChange(e)} />
                                <div className='knobs'></div>
                                <div className='layer'></div>
                            </div>
						</div>
						<div className='row mt-3'>
							<div className='col-6 d-flex flex-row justify-content-center'>
								<div className='d-flex flex-column align-items-center'>
									<span className='city me-4'>{data.name}</span>
									<img src={require(`../assets/img/${data.weather[0].main}.png`)} style={{ maxWidth: '200px' }} />
								</div>
								<div className='d-flex align-items-center'>
									<span className='color-sky big ms-3'>{data.main.temp}°</span>
								</div>
							</div>
							<div className='col-6 d-flex flex-column align-items-center'>
								<div className='mb-4'>
									<span className='text-muted me-3'>Ressenti</span>
									<span className='color-sky'>{data.main.feels_like}°</span>
								</div>
								<div className='mb-4 d-flex align-items-center'>
									<i className='fa-solid fa-arrow-down color-cloud x-large me-2'></i>
									<span className='color-sky x-large me-4'>{data.main.temp_min}°</span>
									<i className='fa-solid fa-arrow-up color-cloud x-large me-2'></i>
									<span className='color-sky x-large'>{data.main.temp_max}°</span>
								</div>
								<div className='mb-3'>
									<span className='color-cloud'>Pression</span> <span className='color-sky'>{data.main.pressure}</span> <i className='fa-solid fa-gauge-high color-cloud'></i>
								</div>
								<div className='mb-3'>
									<span className='color-cloud'>Humidité</span> <span className='color-sky'>{data.main.humidity}</span> <i className='fa-solid fa-droplet color-cloud'></i>
								</div>
							</div>
						</div>
					</div>
				) : null}
			</div>
		</div>
	)
}
