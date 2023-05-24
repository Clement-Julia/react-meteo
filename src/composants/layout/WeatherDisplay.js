import { Link } from 'react-router-dom'

export default function WeatherDisplay({data}) {
	return (
        <div className='container d-flex justify-content-center'>
            <div className='container-meteo'>
                <header className='header-meteo'>
                    <h1 className='h1-meteo'>Météo</h1>
                </header>
                <div className='content-meteo'>
                    <input className='input-meteo' placeholder='Rechercher une localisation' type='text' />
                    <button className='btn-meteo'>
                        <i className="fa-solid fa-magnifying-glass fa-xl icon-search"></i>
                    </button>
                </div>
                <div className='container desc-meteo p-4 mt-4'>
                    <div className='d-flex justify-content-between ms-3'>
                        <span>Météo actuelle</span>
                        <button className='btn btn-primary'>F°</button>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-6 d-flex flex-row justify-content-center'>
                            <div className='d-flex flex-column align-items-center'>
                                <span className='city me-4'>{data.name}</span>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Weather-more-clouds.svg/1200px-Weather-more-clouds.svg.png" style={{ maxWidth: '200px' }} />
                            </div>
                            <div className='d-flex align-items-center'>
                                <span className='color-sky big ms-3'>22°</span>
                            </div>
                        </div>
                        <div className='col-6 d-flex flex-column align-items-center'>
                            <div className='mb-4'>
                                <span className='text-muted me-3'>Ressenti</span>
                                <span className='color-sky'>{data.main.feels_like}°</span>
                            </div>
                            <div className='mb-4 d-flex align-items-center'>
                                <i className="fa-solid fa-arrow-down color-cloud x-large me-2"></i><span className='color-sky x-large me-4'>{data.main.temp_min}°</span>
                                <i className="fa-solid fa-arrow-up color-cloud x-large me-2"></i><span className='color-sky x-large'>{data.main.temp_max}°</span>
                            </div>
                            <div className='mb-3'>
                                <span className='color-cloud'>Pression</span> <span className='color-sky'>{data.main.pressure}</span> <i className="fa-solid fa-gauge-high color-cloud"></i>
                            </div>
                            <div className='mb-3'>
                                <span className='color-cloud'>Humidité</span> <span className='color-sky'>{data.main.humidity}</span> <i className="fa-solid fa-droplet color-cloud"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}
