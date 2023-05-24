import React, { createContext, useEffect, useState } from 'react'

const MyAppContext = createContext()

const MyAppProvider = ({ children }) => {
	const [degree, setDegree] = useState(() => {
		const storedState = localStorage.getItem('degree')
		return storedState ? JSON.parse(storedState) : false
	})

    useEffect(() => {
        localStorage.setItem('degree', JSON.stringify(degree));
    }, [degree]);

	return <MyAppContext.Provider value={{ degree, setDegree }}>{children}</MyAppContext.Provider>
}
export { MyAppContext, MyAppProvider }
