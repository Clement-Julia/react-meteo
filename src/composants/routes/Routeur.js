import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navigation from '../layout/navigation'

import Home from '../pages/Home';
import NotFound from './error-page'

const Routeur = () => {
	return (
		<BrowserRouter>
            <Navigation/>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='*' element={<NotFound />}/>
                </Routes>
		</BrowserRouter>
	)
}

export default Routeur
