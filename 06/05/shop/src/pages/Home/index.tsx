import { createContext, useContext, useState } from 'react'

const Context = createContext(0)

const CompA = () => {
	return <>
		this is a compA
		<CompC></CompC>
	</>
}

const CompC = () => {
	const count = useContext(Context)
	return <>

		this is a CompC
		APP data: { count }

	</>
}

export default function Home() {

	const [state] = useState(0)

	return (
			<>
				this i a root comp
				<Context.Provider value={ state }>
					<CompA />
				</Context.Provider>
			</>
	)
}