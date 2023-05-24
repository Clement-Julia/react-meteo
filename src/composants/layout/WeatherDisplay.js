import { Link } from 'react-router-dom'

export default function WeatherDisplay({data}) {
	return (
        <div className='container d-flex justify-content-center'>
            <div className='container-meteo'>
                <header className='header-meteo'>
                    <h1 className='h1-meteo'>Météo</h1>
                </header>
                <div className='content-meteo'>
                    <input className='input-meteo' placeholder='Search for location' type='text' value='' />
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
                        <div className='col-6 d-flex flex-column align-items-center'>
                            <span className='city me-4'>Paris</span>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Weather-more-clouds.svg/1200px-Weather-more-clouds.svg.png" style={{ maxWidth: '200px' }} />
                        </div>
                        <div className='col-6 d-flex flex-column'>
                            <span className='mb-3'>Ressenti 22°</span>
                            <div className='mb-3 d-flex align-items-center'>
                                <i className="fa-solid fa-arrow-down color-cloud x-large"></i><span className='color-sky x-large'>18°</span>
                                <i className="fa-solid fa-arrow-up color-cloud x-large"></i><span className='color-sky x-large'>24°</span>
                            </div>
                            <span className='color-cloud mb-3'>Pression 1003 <i className="fa-solid fa-gauge-high"></i></span>
                            <span className='color-cloud mb-3'>Humidité 73 <i className="fa-solid fa-droplet"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}
