import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from '../pages/Home'
import NotFound from './error-page'
import SearchForm from '../pages/SearchForm';
import ErreurRequete from '../pages/ErreurRequete';

const Routeur = () => {
	return (
		<BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/:ville' element={<SearchForm/>} />
                    <Route path='erreur-requete' element={<ErreurRequete/>} />
                    <Route path='*' element={<NotFound />}/>
                </Routes>
		</BrowserRouter>
	)
}

export default Routeur