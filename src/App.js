import { useContext, useEffect, useState } from 'react'
import Routeur from './composants/routes/Routeur'
import { MyAppProvider, MyAppContext } from './context';

export default function App() {

	useEffect(() => {
		const checkbox = document.getElementById('degree')

		if (checkbox) {
			checkbox.addEventListener('change', () => {
				location.reload();
			})
		}
	})
	
	return (
		<MyAppProvider>
			<Routeur />
		</MyAppProvider>
	)
}
